from flask import Flask, request, render_template, make_response
import requests
import os
import sqlite3

app = Flask(__name__)

@app.route('/')
def homepg():
	return render_template('index.html')