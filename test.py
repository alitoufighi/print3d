from flask import Flask, request, render_template, url_for, Response, json
from utils import Machine, Utils
from os.path import isfile
from flask import jsonify
import subprocess

app = Flask(__name__)
printer = Machine()

@app.route('/api/temperatures', methods=['GET'])
def temperatures():
    """
    GET:
    {
        bed: {cur: Number, goal: Number},
        ext: {cur: Number, goal: Number}
    }
    """
    if request.method == 'GET':
        printer.refresh_temp()
        bed_temp = printer.get_bed_temp()
        ext_temp = printer.get_extruder_temp()
        data = {
            'bed': {
                'cur': bed_temp['current'],
                'goal': bed_temp['point']
            },
            'ext': {
                'cur': ext_temp['current'],
                'goal': ext_temp['point']
            }
        }
        return jsonify(data), 200

@app.route('/api/wifi', methods=['OPTIONS', 'POST'])
def wifi():
    """
    OPTIONS:
    {
        list: String[]
    }

    POST:
    {
        ssid: String,
        password: String
    }
    {
        status: 'success' | 'failure'
    }
    """
    try:
        if request.method == 'OPTIONS':
            return jsonify({'list': Utils.wifi_list()}), 200
        elif request.method == 'POST':
            un = request.json['ssid']
            pw = request.json['password']
            ans = Utils.wifi_con(un, pw)
            if ans == 'success':
                return jsonify({'status': 'success'}), 200
            else:
                raise
    except Exception as e:
        print('error in wifi:', e)
        return Response(status=500)



@app.route('/api/move_axis', methods=['POST'])
def move_axis():
    """
    POST:
    {
        axis: 'X' | 'Y' | 'Z' | 'All',
        value: Number
    }
    """
    if request.method == 'POST':
        try:
            data = request.json
            printer.move_axis(data['axis'], "Relative", data['value'])
            return Response(status=200)
        except Exception as e:
            print("ERROR:", e)
            return Response(status=500)

@app.route('/api/home', methods=['POST'])
def home_machine():
    """
    POST:
    {
        axis: 'X' | 'Y' | 'Z' | 'All'
    }
    """
    if request.method == 'POST':
        try:
            axis = request.json['axis']
            print(axis)
            printer.Home_machine(axis)
            return Response(status=200)
        except Exception as e:
            print("ERROR:", e)
            return Response(status=500)


@app.route('/api/release_motor', methods=['POST'])
def release_motor():
    if request.method == 'POST':
        try:
            printer.Release_motors()
            return Response(status=200)
        except Exception as e:
            print("ERROR:", e)
            return Response(status=500)


@app.route('/api/directory', methods=['POST'])
def usb_list():
    """
    POST:
    {
        cd: String
    }
    {
        data: String[],
        type: 'dir' | 'file',
        status: 'success' | 'failure'
    }
    """
    if request.method == 'POST':
        try:
            req = request.json
            file_addr = req['cd']
            if file_addr.endswith('.gcode') and isfile(printer.base_path + '/' + file_addr):
                return jsonify({'status': 'success', 'data': file_addr, 'type': 'file'}), 200
            print('it wasn\'t file!')
            data = printer.get_connected_usb() if req['cd'] == '' else printer.get_usb_files(req['cd'])
            print('the files:', data)
            return jsonify({'status':'success', 'data': data, 'type': 'dir'}), 200
        except Exception as e:
            print("exception:", e)
            return Response(status=500)


@app.route('/api/fan_speed', methods=['POST'])
def fan_speed():
    """
    POST:
    {
        status: 'ON' | 'Half' | 'OFF'
    }
    """
    if request.method == 'POST':
        try:
            status = request.json['status']
            printer.fan_status(status)
            return Response(status=200)
        except Exception as e:
            print("ERROR", e)
            return Response(status=500)


@app.route('/api/heat', methods=['POST'])
def heat():
    """
    POST
    {
        field: 'hotend' | 'bed',
        action: 'heat' | 'cooldown',
        value: Number
    }
    {
        status: 'success' | 'failure'
    }
    """
    try:
        data = request.json
        if data['field'] == 'hotend':
            if data['action'] == 'heat':
                printer.set_hotend_temp(data['value'])
            elif data['action'] == 'cooldown':
                printer.cooldown_hotend()
            else:
                raise
        elif data['field'] == 'bed':
            if data['action'] == 'heat':
                printer.set_bed_temp(data['value'])
            elif data['action'] == 'cooldown':
                printer.cooldown_bed()
            else:
                raise
        else:
            raise

        return jsonify({'status': 'success'}), 200
    except Exception as e:
        print("Error in heating:", e)
        return jsonify({'status': 'failure'}), 500


@app.route('/api/extrude', methods=['POST'])
def extrude():
    """
    POST:
    {
        value: Number,
        feedrate: Number (Optional)
    }
    """
    if request.method == 'POST':
        try:
            data = request.json
            if 'feedrate' in data:
                printer.extrude(data['value'], data['feedrate'])
            else:
                printer.extrude(data['value'])
            return Response(status=200)
        except Exception as e:
            print("ERROR:", e)
            return Response(status=500)


@app.route('/api/bedleveling', methods=['POST'])
def bed_leveling():
    """
    POST:
    {
        stage: 1 | 2 | 3 | 4    
    }
    """
    if request.method == 'POST':
        try:
            stage = request.json['stage']
            printer.bedleveling_manual(stage)
            return Response(status=200)
        except Exception as e:
            print("ERROR", e)
            return Response(status=500)


@app.route('/api/print', methods=['POST'])
def print_it():
    """
    POST:
    {
        action: 'print' | 'stop' | 'pause' | 'resume' | 'percentage' | 'unfinished'
        cd: String, (only if it was print)
        line: Number (Optional)
    }
    
    default response:
    {
        status: 'success' | 'failure'
        percentage: Number
    }
    unfinished response:
    {
        status: 'success' | 'failure'
        unfinished: {
            exist: True | False,
            (if exist:)
            cd: String,
            line: Number
        }
    }

    """
    if request.method == 'POST':
        try:
            req = request.json
            action = req['action']
            # status = {'status': 'success', 'status_code': 200}
            percentage = 0

            if action == 'print':
                # try:
                gcode_file_address = req['cd']
                if 'line' in req:
                    printer.start_printing_thread(gcode_dir=gcode_file_address, line=req['line'])
                else:
                    printer.start_printing_thread(gcode_dir=gcode_file_address)
                # except Exception as e:
                #     print('ERROR:', e)
                #     status = {'status': str(e), 'status_code': 500}
            elif action == 'stop':
                printer.stop_printing()
            elif action == 'resume':
                printer.resume_printing()
            elif action == 'pause':
                printer.pause_printing()
            elif action == 'percentage':
                percentage = printer.get_percentage()
            elif action == 'unfinished':
                cfup = printer.check_for_unfinished_print()
                if cfup[0] == True:
                    return jsonify({
                        'status': 'success',
                        'unfinished': {
                            'exist': cfup[0],
                            'cd': cfup[1][0],
                            'line': cfup[1][1]
                        }
                    }), 200
                else:
                    return jsonify({'status': 'success', 'unfinished': {'exist': False, 'cd': ''}}), 200
            else:
                raise 

            return jsonify({'status': 'success', 'percentage': percentage}), 200
        except Exception as e:
            print('ERROR:', e)
            return Response(status=500)


@app.route('/api/ip', methods=['POST'])
def ip_list():
    """
    POST:
    {
        ips: String[]
    }
    """
    try:
        if request.method == 'POST':
            ips = Utils.get_ip_list()
            print('list of ips:' ips)
            return jsonify({'ips': ips}), 200
    except Exception as e:
        print('error in getting ips:', e)
        return Response(status=500)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def hello(path):
    return render_template('index.html')


if __name__ == '__main__':
    print('let\'s go')
    subprocess.Popen(["chromium-browser","--hide-scrollbars","--overscroll-history-navigation=0","--disable-infobars"," --noerrdialog","--no-sandbox","--kiosk", "--disable-translate", "--start-maximized", "--hide-scrollbars", "http://0.0.0.0"])
    app.run(host='0.0.0.0', port=80, threaded=True, debug=True, use_reloader=False)

