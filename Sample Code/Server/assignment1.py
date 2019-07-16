################### 
# Course: CMPS128
# Date: Spring 2019
# Assignment: #1
# Author: Reza NasiriGerdeh
# Email: rnasirig@ucsc.edu
###################

from flask import Flask
from flask import request
app = Flask(__name__)

@app.errorhandler(Exception)
def not_supported(e):
    return 'This method is unsupported.', 405
def not_found(e):
    return 'Not found!', 404

# register error handlers
app.register_error_handler(405, not_supported)
app.register_error_handler(404, not_found)

# /hello end point
@app.route("/hello")
def hello_world():
  return "Hello, world!"

# /test end point
@app.route("/test", methods = ['GET', 'POST'])
def get_post():
    if request.method == 'GET':
        return "GET message received"
    elif request.method == 'POST':
        return "POST message received: " + request.args.get("msg")


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8081)
