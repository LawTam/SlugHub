from app import app
import json
from collections import OrderedDict

@app.route('/')
@app.route('/index')
def index():
	return "Hello, World!\n"

@app.route('/lowerdivCSE')
def lowerdivCSE():
    file = open('lowerdiv_cse_classes.json','r') 
    print (file.read())
    file.close() 
    with open('lowerdiv_cse_classes.json') as json_file:  
    	data = json.load(json_file)
    	return data

@app.route('/upperdivCSE')
def display_upperdiv_cse():
    with open('upperdiv_cse_classes.json') as json_file:  
    	data = json.load(json_file)
    	return data
