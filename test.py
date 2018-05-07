from flask import Flask, request, render_template, url_for, Response
from utils import Machine
app = Flask(__name__)
printer = Machine()

@app.route("/")
def hello():
	return render_template('index.html')

@app.route('/api/move_axis', methods=['POST'])
def move_axis():
    if request.method == 'POST':
    	# FORM
    	# data = request.form
    	# print('@@@', data, data['axis'], data['value'])
    	# printer.move_axis(data['axis'], "Relative", float(data['value']))

    	# JSON
    	data = request.get_json()
    	print("data received:", data)
    	printer.move_axis(data['axis'], "Relative", float(data['value']))

    	return Response('moved')
    	# printer.move_axis()

@app.route('/api/home', methods=['POST'])
def home():
	if request.method == 'POST':
		data = request.get_json()
		print("axis to be homed:", data)
		printer.Home_machine(data['axis'])
		return Response('homed')