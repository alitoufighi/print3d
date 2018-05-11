from flask import Flask, request, render_template, url_for, Response, json
from utils import Machine, Utils
from os.path import isfile
from flask import jsonify
import subprocess


app = Flask(__name__)
printer = Machine()


@app.route('/')
def hello():
    return render_template('index.html')


@app.route('/api/move_axis', methods=['POST'])
def move_axis():
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
    if request.method == 'POST':
        try:
            req = request.json
            file_addr = req['cd']
            if file_addr.endswith('.gcode') and isfile(printer.base_path + '/' + file_addr):
                return Response({'data': file_addr, 'type': 'file'})
            print('it wasn\'t file!')
            data = printer.get_connected_usb() if req['cd'] == '' else printer.get_usb_files(req['cd'])
            print('the files:', data)
            return jsonify(data = 'data', type = 'dir', status=200)
        except Exception as e:
            print("exception:", e)
            return Response(status=500)


@app.route('/api/fan_speed', methods=['POST'])
def fan_speed():
    if request.method == 'POST':
        try:
            status = request.json['status']
            printer.fan_status(status)
            return Response(status=200)
        except Exception as e:
            print("ERROR", e)
            return Response(status=500)


@app.route('/api/set_hotend_temp', methods=['POST'])
def set_hot_end_temp():
    try:
        value = request.json['value']
        printer.set_hotend_temp(value)
        return Response(status=200)
    except Exception as e:
        print("ERROR:", e)
        return Response(status=500)


@app.route('/api/cooldown_hotend', methods=['POST'])
def cool_down_hot_end():
    try:
        printer.cooldown_hotend()
        return Response(status=200)
    except Exception as e:
        print("ERROR:", e)
        return Response(status=500)


@app.route('/api/set_bed_temp', methods=['POST'])
def set_bed_temp():
    try:
        value = request.json['value']
        printer.set_bed_temp(value)
        return Response(status=200)
    except Exception as e:
        print("ERROR:", e)
        return Response(status=500)


@app.route('/api/cooldown_bed', methods=['POST'])
def cool_down_bed():
    try:
        printer.cooldown_bed()
        return Response(status=200)
    except Exception as e:
        print("ERROR:", e)
        return Response(status=500)


@app.route('/api/extrude', methods=['POST'])
def extrude():
    if request.method == 'POST':
        try:
            data = request.json
            printer.extrude(data['value'])
            return Response(status=200)
        except Exception as e:
            print("ERROR:", e)
            return Response(status=500)


@app.route('/api/bedleveling', methods=['POST'])
def bed_leveling():
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
    if request.method == 'POST':
        try:
            req = request.json
            gcode_file_address = req['cd']
            action = req['action']
            # status = {'status': 'success', 'status_code': 200}
            percentage = 0

            if action == 'print':
                # try:
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
            else:
                raise 

            return jsonify(status=200, percentage = percentage)
        except Exception as e:
            print('ERROR:', e)
            return Response(status=500)

@app.route('/api/wifi', methods=['GET, POST'])
def wifi():
    if request.method == 'GET':
        return Response({'list': Utils.wifi_list()})
    elif request.method == 'POST':
        un = request.json['ssid']
        pw = request.json['password']
        return Response(Utils.wifi_con(un, pw))


if __name__ == '__main__':
    print('let\'s go')
    subprocess.Popen(["chromium-browser","--overscroll-history-navigation=0","--disable-infobars"," --noerrdialog","--no-sandbox","--kiosk", "--disable-translate", "--start-maximized", "http://0.0.0.0"])
    app.run(host='0.0.0.0', port=80, threaded=True, debug=True, use_reloader=False)
