################### 
# Course: CMPS128
# Date: Spring 2019
# Assignment: #2A
# Author: Reza NasiriGerdeh
# Email: rnasirig@ucsc.edu
###################

from flask import Flask
from flask import request
from flask import jsonify

from flask import make_response


app = Flask(__name__)


k_v_store = {}

# /key-value-store end point
@app.route("/key-value-store/<key>", methods = ['GET', 'DELETE', 'PUT'])

def respond_request(key):

    # Handle GET requests
    if request.method == 'GET':
        if key in k_v_store:
            return make_response(jsonify(message="Retrieved successfully", doesExist=True, value=k_v_store[key]), 200)
        else:
            return make_response(jsonify(message="Error in GET", doesExist=False, error="Key does not exist"),  404)

    # Handle PUT requests
    elif request.method == 'PUT':
        if 'value' not in request.get_json():
            return make_response(jsonify(message="Error in PUT", error="Value is missing"), 400)

        if len(key) > 50:
            return make_response(jsonify(message="Error in PUT", error="Key is too long"), 400)

        value = request.get_json()['value']
        if key in k_v_store:
            k_v_store[key] = value
            return make_response(jsonify(message="Updated successfully", replaced=True), 200)
        else:
            k_v_store[key] = value
            return make_response(jsonify(message="Added successfully", replaced=False),  201)

    # Handle DELETE request
    elif request.method == 'DELETE':
        if key in k_v_store:
            k_v_store.pop(key, None)
            return make_response(jsonify(message="Deleted successfully", doesExist=True), 200)
        else:
            return make_response(jsonify(message="Error in DELETE", doesExist=False, error="Key does not exist"),  404)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8082)
