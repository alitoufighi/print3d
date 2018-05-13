"""
this is a layer that connect the HTML gui with the serialport layer
programmer = SHB
company = Persia3DPrinter (http://persia3dprinter.ir/)
"""

import serial
import time
import threading
import subprocess
import codecs
import os


class Machine:
    def __init__(self, machine_port='/dev/ttyUSB0', machine_baudrate=250000):
        """
        :param machine_port:
        for linux base boards something like  '/dev/ttyUSB0'
        for windows base boards something like 'COM2'
        :param machine_baudrate:
        usually is 250000 because of machine-settings-database.db default
        """
        # print("I'm new.")
        self.base_path = '/media/imans77'
        self.machine_baudrate = machine_baudrate
        self.machine_port = machine_port
        self.machine_serial = None
        self.__Gcodes_to_run = []
        self.__Gcodes_return = []
        #self.machine_settings = pickledb.load('machine-settings-database.db', False)
        self.machine_settings ={
            # manual bed leveling setting
            'bedleveling_X1': 50, 'bedleveling_X2': 180, 'bedleveling_Y1': 50, 'bedleveling_Y2': 180,
            'traveling_feedrate': 3000,
            'bedleveling_Z_ofsset': 10, 'bedleveling_Z_move_feedrate': 1500,
            # hibernate setting
            'hibernate_Z_offset': 5, 'hibernate_Z_move_feedrate': 1500,
            # pause setting
            'pause_Z_offset': 10, 'pause_Z_move_feedrate': 1500,
            # printing buffer
            'printing_buffer': 15
        }
        # print('here')
        # print (self.machine_settings.get('printing_buffer'))
        self.Gcode_handler_error_logs = []
        self.extruder_temp  = {'current':0,'point':0}
        self.bed_temp = {'current':0,'point':0}
        self.print_percentage = 0
        self.__stop_flag = False
        self.__pause_flag = False
        self.start_machine_connection()

    def get_bed_temp(self):
        return self.bed_temp

    def get_extruder_temp(self):
        return self.extruder_temp

    def start_machine_connection(self):
        """
        :return:
        True as connected
        False as not connected
        """
        try:
            self.machine_serial = serial.Serial(
                port=self.machine_port,
                baudrate=self.machine_baudrate,
                parity=serial.PARITY_NONE,
                stopbits=serial.STOPBITS_ONE,
                bytesize=serial.EIGHTBITS
            )
            self.machine_serial.close()
            self.machine_serial.open()
            time.sleep(2)
            self.machine_serial.write(b'G00\n')
            # print('@#')
            while True:
                text = str(self.machine_serial.readline())
                # print(text)
                if text.find('ok') != -1:
                    break
            # print('overthere')
            gcode_handler_thread = threading.Thread(target=self.__Gcode_handler)
            #gcode_handler_thread.daemon=True
            gcode_handler_thread.start()

            return True,None
        except Exception as ex:
            print(ex)
            return False,ex


    def __Gcode_handler(self):
        """
        this method is for send gcodes on the serial line
        :return:
        """
        first_done=False
        while True:
            try:
                if self.__Gcodes_to_run:
                    # print("GCODES TO RUN:", self.__Gcodes_to_run)
                    print('send to machine', ('%s%s' % (self.__Gcodes_to_run[0], '\n')).encode('utf-8'))
                    self.machine_serial.write((self.__Gcodes_to_run[0] + '\n').encode('utf-8'))
                    if self.__Gcodes_return[0] == 0:
                        '''nothing to return'''
                        # print('machine serial', self.machine_serial)
                        while self.machine_serial.readline() != 'ok\n'.encode('utf-8'): pass
                        first_done = True

                    elif self.__Gcodes_return[0] == 1:
                        '''retrun temp'''
                        data = self.machine_serial.readline().decode('utf-8')
                        splited = data.split(' ')
                        self.extruder_temp['current'] = float(splited[1][2:])
                        self.extruder_temp['point'] = float(splited[2][1:])
                        self.bed_temp['current'] = float(splited[3][2:])
                        self.bed_temp['point'] = float(splited[4][1:])
                        print (self.extruder_temp)
                        first_done = True

                    elif self.__Gcodes_return[0] == 2:
                        '''return bed temp for mcode M190'''
                        data = self.machine_serial.readline().decode('utf-8')
                        while data != 'ok\n':
                            splited = data.split(' ')
                            self.extruder_temp['current'] = float(splited[0][2:])
                            self.bed_temp['current'] = float(splited[2][2:])
                            data = self.machine_serial.readline().decode('utf-8')
                        first_done = True

                    elif self.__Gcodes_return[0] == 3:
                        '''return ext temp for mcode M109'''
                        data = self.machine_serial.readline().decode('utf-8')
                        while data != 'ok\n':
                            splited = data.split(' ')
                            self.extruder_temp['current'] = float(splited[0][2:])
                            data = self.machine_serial.readline().decode('utf-8')
                        first_done = True

                    if first_done:
                        print('in first done')
                        self.__Gcodes_to_run.pop(0)
                        self.__Gcodes_return.pop(0)
                        first_done = False
            except Exception as ex:
                print('kir2', ex)
                self.Gcode_handler_error_logs.append(ex)
                if len(self.Gcode_handler_error_logs) > 9:
                    break

    def __read_file_gcode_lines(self,gcode_file_path,line_to_go=0):
        """
        :param gcode_file_path:
        the path of the gcode file
        :param line_to_go:
        start to print from wich line
        :return:
        None
        """
        '''initialize'''
        self.print_percentage = 0
        self.z_pos_offset = 0
        self.__stop_flag = False
        self.__pause_flag = False
        command = None
        z_pos_offset = 0
        gcode_file = codecs.open(gcode_file_path, 'r')
        lines = []

        '''get a backup from gcode file path for hibernate '''
        with open('backup_print_path.bc', 'w') as backup_print:
            backup_print.write(gcode_file_path)

        ''' read files lines'''
        for line in gcode_file:
            lines.append(line[:-2])

        '''hibernate mode'''
        if line_to_go != 0:

            '''first homing the x and y to resume printing'''
            self.append_gcode('G91')
            self.append_gcode('G1 Z%f F%f'%(self.machine_settings['hibernate_Z_offset'],self.machine_settings['hibernate_Z_move_feedrate']))
            self.append_gcode('G28 X Y')
            self.append_gcode('G90')

            '''get the bed temp from the gcode'''
            for line in lines:
                if line.find('M190') == 0:
                    self.bed_temp['point'] = int(float(line[line.find('S') + 1:]))
                    self.append_gcode('M190 S%f'%(self.bed_temp['point']),2)
                    break

            '''get the extruder temp from the gcode'''
            for line in lines:
                if line.find('M109') == 0:
                    self.extruder_temp['point'] = int(float(line[line.find('S') + 1:]))
                    self.append_gcode('M109 S%f'%(self.extruder_temp['point']),3)
                    break

            '''find the layer that had been printed'''
            for i in range(len(lines)):
                if lines[i].find(';LAYER:') == 0:
                    if line_to_go == int(lines[i][7:]):
                        '''get the direct gcode line (the past value was the layer that has been printed)'''
                        line_to_go = i

            '''send the nozzle to the correct position to start printing'''
            self.append_gcode('G91')
            self.append_gcode('G1 -Z%f F%f'%(self.machine_settings['hibernate_Z_offset'],self.machine_settings['hibernate_Z_move_feedrate']))
            self.append_gcode('G90')


        ''' gcode applicator '''
        for x in range(line_to_go, len(lines)):
            '''wait for buffer to be free'''
            while len(self.__Gcodes_to_run) >= 15:pass#self.machine_settings['printing_buffer']:pass
            signnum = lines[x].find(';')
            if not lines[x]:pass
            elif signnum == -1:
                command = lines[x]
            elif signnum == 0:
                layer_sign_num = lines[x].find(';LAYER:')
                if layer_sign_num == 0:
                    layer = lines[x][7:]
                    backup_print = open('backup_print.bc', 'w')
                    backup_print.write(layer)
                    backup_print.close()
            else:
                command = lines[x][:-(len(lines[x]) - signnum)]

            '''gcode sending to printer'''
            if command:

                ''' use command '''

                if command.find('M190') == 0:
                    self.bed_temp['point'] = int(float(command[command.find('S') + 1:]))
                    self.append_gcode('M190 S%f' % (self.bed_temp['point']), 2)

                elif command.find('M109') == 0:
                    self.extruder_temp['point'] = int(float(command[command.find('S') + 1:]))
                    self.append_gcode('M109 S%f' % (self.extruder_temp['point']), 3)

                elif command.find('M0') == 0:
                    pass

                elif command.find('G0') == 0:
                    Zresulte = command.find('Z')
                    if Zresulte != -1:
                        '''get the last z before the machine trun off'''
                        if z_pos_offset == 0 and line_to_go != 0:
                            z_pos_offset = float(command[Zresulte + 1:])
                        '''get the current z position of file'''
                        z_pos = float(command[Zresulte + 1:])
                        if line_to_go != 0:
                            z_pos = z_pos - z_pos_offset
                        command = command[:-(len(command) - (Zresulte + 1))] + str(z_pos)
                    self.append_gcode(command)

                else:
                    self.append_gcode(command)
                command = None

            self.print_percentage = int(float(x + 1) / float(len(lines)) * 100)

            ''' stop printing '''
            if self.__stop_flag:
                break

            ''' pause and resume the printing '''
            if self.__pause_flag:

                self.append_gcode('G91')
                self.append_gcode('G1 Z%f F%f'%(self.machine_settings['pause_Z_offset'],self.machine_settings['pause_Z_move_feedrate']))
                self.append_gcode('G28 X Y')
                self.append_gcode('G90')

                while self.__pause_flag:pass

                self.append_gcode('G91')
                self.append_gcode('G1 Z-%f F%f'%(self.machine_settings['pause_Z_offset'],self.machine_settings['pause_Z_move_feedrate']))
                self.append_gcode('G90')

            '''   print done '''
        try:
            os.remove('backup_print.bc')
            os.remove('backup_print_path.bc')
        except Exception as kir:
            print('kir', kir)
            pass

    def append_gcode(self,gcode,gcode_return=0):
        """
        append the gcode to the privet var to be sent in the thread
        :param gcode:
        a single line  of gcode
        :param gcode_return:
        what kind of data return that gcode
        0 -> nothing
        1 -> temp
        2 -> bed temp(M190)
        3 -> ext temp(M109)
        :return:
        """
        self.__Gcodes_to_run.append(gcode)
        self.__Gcodes_return.append(gcode_return)
        print('Gcodes to Run:', self.__Gcodes_to_run)



################################### Methodes for controll printer

    def Home_machine(self,axis='All'):
        """

        :param axis:
        the axis to home
        X Y Z All
        :return:
        """
        # print(axis)
        if axis== 'All':
            self.append_gcode(gcode='G28 X Y Z')
        elif axis== 'X':
            self.append_gcode(gcode='G28 X')
        elif axis== 'Y':
            self.append_gcode(gcode='G28 Y')
        elif axis== 'Z':
            self.append_gcode(gcode='G28 Z')

    def Release_motors(self):
        self.append_gcode(gcode="M84")

    def fan_status(self,status='ON'):
        """

        :param status:
        ON for 255 speed for fan
        Half for 127 speed for fan
        OFF for 0 speed for fan
        :return:
        """
        if status == 'ON':
            self.append_gcode('M106 S255')
        elif status == 'Half':
            self.append_gcode('M106 S127')
        elif status == 'OFF':
            self.append_gcode('M107')

    def move_axis(self,axis,positioning_mode,value):
        """

        :param axis:
        X
        Y
        Z
        :param positioning_mode:
        Relative for G91
        Absolute for G90
        :param value:
        the value to be applied
        :return:
        """
        if positioning_mode == 'Relative':
            self.append_gcode(gcode='G91')
        elif positioning_mode == 'Absolute':
            self.append_gcode(gcode='G90')
        gcode = 'G1 %s%f'%(axis,value)
        self.append_gcode(gcode=gcode)

    def extrude(self,value,feedrate=1000):
        """
        :param feedrate:
        the speed of extruder
        :param value:
        the value to be applied
        :return:
        """
        self.append_gcode(gcode='G91')
        gcode = 'G1 E%f F%f'%(value,feedrate)
        self.append_gcode(gcode=gcode)

    def cooldown_hotend(self):
        self.append_gcode(gcode='M104 S0')

    def cooldown_bed(self):
        self.append_gcode(gcode='M140 S0')

    def set_hotend_temp(self,value):
        if value+self.extruder_temp['point'] > 0:
            self.append_gcode(gcode='M104 S%d'%(value+self.extruder_temp['point']))
        else:
            self.append_gcode(gcode='M104 S0')


    def set_bed_temp(self,value):
        if value+self.bed_temp['point'] > 0 :
            self.append_gcode(gcode='M140 S%d'%(value+self.bed_temp['point']))
        else:
            self.append_gcode(gcode='M140 S0')

    def bedleveling_manual(self,stage):
        """

        :param stage:
        1 2 3 4
        |-------------------|
        |         |         |
        |    1    |   2     |
        |-------------------|
        |         |         |
        |   3     |   4     |
        |-------------------|
        :return:
        """
        if stage == 1:
            self.append_gcode(gcode='G91')
            gcode = 'G1 Z%f F%f'%(self.machine_settings['bedleveling_Z_ofsset'],self.machine_settings['bedleveling_Z_move_feedrate'])
            self.append_gcode(gcode=gcode)
            self.append_gcode(gcode='G90')
            gcode ='G1 X%d Y%d F%f'%(self.machine_settings['bedleveling_X1'],self.machine_settings['bedleveling_Y1'],self.machine_settings['traveling_feedrate'])
            self.append_gcode(gcode=gcode)
            self.append_gcode(gcode='G1 Z0')

        if stage == 2:
            self.append_gcode(gcode='G91')
            gcode = 'G1 Z%f F%f'%(self.machine_settings['bedleveling_Z_ofsset'],self.machine_settings['bedleveling_Z_move_feedrate'])
            self.append_gcode(gcode=gcode)
            self.append_gcode(gcode='G90')
            gcode ='G1 X%d Y%d F%f'%(self.machine_settings['bedleveling_X2'],self.machine_settings['bedleveling_Y1'],self.machine_settings['traveling_feedrate'])
            self.append_gcode(gcode=gcode)
            self.append_gcode(gcode='G1 Z0')

        if stage == 3:
            self.append_gcode(gcode='G91')
            gcode = 'G1 Z%f F%f'%(self.machine_settings['bedleveling_Z_ofsset'],self.machine_settings['bedleveling_Z_move_feedrate'])
            self.append_gcode(gcode=gcode)
            self.append_gcode(gcode='G90')
            gcode ='G1 X%d Y%d F%f'%(self.machine_settings['bedleveling_X1'],self.machine_settings['bedleveling_Y2'],self.machine_settings['traveling_feedrate'])
            self.append_gcode(gcode=gcode)
            self.append_gcode(gcode='G1 Z0')

        if stage == 4:
            self.append_gcode(gcode='G91')
            gcode = 'G1 Z%f F%f'%(self.machine_settings['bedleveling_Z_ofsset'],self.machine_settings['bedleveling_Z_move_feedrate'])
            self.append_gcode(gcode=gcode)
            self.append_gcode(gcode='G90')
            gcode ='G1 X%d Y%d F%f'%(self.machine_settings['bedleveling_X2'],self.machine_settings['bedleveling_Y2'],self.machine_settings['traveling_feedrate'])
            self.append_gcode(gcode=gcode)
            self.append_gcode(gcode='G1 Z0')

    def refresh_temp(self):
        self.append_gcode('M105',1)

    """ directories """
    def get_connected_usb(self):
        """
        select a usb
        :return:
        first is any usb connected or not
        second the exception or the directories of usb
        """
        sub_usb_dir = subprocess.Popen(['ls', self.base_path], stdout=subprocess.PIPE).communicate()[0]
        sub_usb_dir = sub_usb_dir[:-1]
        if sub_usb_dir == '':
            return None
            # return False,'No usb found.'
        else:
            sub_usb_dir=sub_usb_dir.split(b'\n')
            sub_usb_dir = [x.decode('utf-8') for x in sub_usb_dir]
            return sub_usb_dir

    def get_usb_files(self,sub_dir):
        """
        :param sub_dir:
        the name if the usb taken from 'get connected usb '
        or the sub foldr name
        :return:
        all founded files and folders names
        """
        sub_dir = self.base_path + '/' + sub_dir
        files = os.listdir(sub_dir)
        folders, gcodes = [], []
        for name in files:
            if name.endswith('.gcode') :
                gcodes.append(str(name))
            if os.path.isdir(os.path.join(sub_dir, name)):
                folders.append(str(name))

        for g in gcodes:
        	folders.append(g)
        return folders

    ''' print '''
    def start_printing_thread(self,gcode_dir,line=0):
        print('@@@ printing file dir:', gcode_dir)
        gcode_dir = self.base_path + '/' + gcode_dir
        read_file_gcode_lines_thread = threading.Thread(target=self.__read_file_gcode_lines,args=(gcode_dir,line,))
        read_file_gcode_lines_thread.start()
        print ('started')

    def stop_printing(self):
        self.__stop_flag = True

    def pause_printing(self):
        self.__pause_flag = True

    def resume_printing(self):
        self.__pause_flag = False

    def get_percentage(self):
        return self.print_percentage

    def check_for_unfinished_print(self):
        """
        checking for unfinished work for hibernate situation
        :return:
        if there was any unfinishd job it first return TRUE and return a array of [unfinished gcode file path , the last printed line ]
        if there was no unfinishd job it returns FALSE , NONE
        """
        try:
            backup_print = open('backup_print.bc', 'r')
            backup_print_path = open('backup_print_path.bc', 'r')
            backup_file_path = backup_print_path.readline()
            backup_line = int(backup_print.readline())
            print (backup_line)
            backup_print.close()
            backup_print_path.close()
            return True,[backup_file_path, backup_line]
        except:
            return False,None

    def delete_last_print_files(self):
        try:
            os.remove('backup_print.bc')
            os.remove('backup_print_path.bc')
        except:
            pass


    ''' recent activites '''
    def check_last_print(self):
        pass


class Utils():
    # util function to get client ip address
    @staticmethod
    def get_client_ip_address(request):
        return request.META.get('REMOTE_ADDR') or request.META.get('HTTP_X_FORWARDED_FOR', '')

    @staticmethod
    def get_server_ip_address(request):
        ip = request.get_host().split(':')[0]
        return '127.0.0.1' if ip == '0.0.0.0' else ip

    @staticmethod
    def get_ip_list():
    	# return ['192.168.0.0', '192.168.0.1']
    	ips = os.popen('sudo hostname -I').read()
    	return ips.split()

    @staticmethod
    def wifi_con(un, pw):
        try:
            os.system('nmcli n on')
            os.system('nmcli d wifi connect \"{0}\" password \"{1}\"'.format(un, pw))
            return 'success'
        except Exception as e:
            print('ERROR:', e)
            return 'failure'

    @staticmethod
    def wifi_list():
        try:
            # is not always wlp2s0. on raspberry: wlan0
            x = os.popen('sudo iw dev wlan0 scan | grep SSID').read()
            y = [m.split() for m in x.split('\n')]
            res = []
            for item in y[:-2]:
                w = ''
                for i in range(1, len(item)):
                    w += str(item[i])
                    if i != len(item) - 1:
                        w += ' '
                if w != '':
                    res.append(w)
            return res
        except Exception as e:
            print('ERROR:', e)
            return None
