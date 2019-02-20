from flask import Flask, request, render_template, make_response
import requests
import os
import sqlite3

app = Flask(__name__)

@app.route('/', methods=["POST", "GET"])
def homepg():
	return render_template('index.html')

@app.route('/hi')
def hi():
	return "HI"

if __name__ == '__main__':
	app.run()
