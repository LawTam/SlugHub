from app import app
import json

@app.route('/')
@app.route('/index')
def index():
	return "Hello, World!\n"

@app.route('/display')
def display():
    with open('classes.json') as json_file:  
    	data = json.load(json_file)
    	return data
