from flask import Flask, request, render_template, make_response
import requests
import os
import sqlite3

app = Flask(__name__)

conn = sqlite3.connect('chat.db')
c = conn.cursor()
c.execute('''CREATE TABLE IF NOT EXISTS chat (id INTEGER PRIMARY KEY AUTOINCREMENT, my_text text, user INTEGER''');
conn.commit()
conn.close()

#this user value will be 1

@app.route('/', methods=["POST", "GET"])
def homepg():
	if request.method == 'POST':
		conn = sqlite3.connect('twitter.db')
		c = conn.cursor()
		my_text = request.form['text']
		c.execute("INSERT INTO chat (my_text, user) values (?, ?)", (my_text, 1))
		conn.commit()
		conn.close()

	if request.method == 'GET':
		get_messages();
	return render_template('index.html')

def get_messages():
	conn = sqlite3.connect('twitter.db')
	c = conn.cursor()
	latest_text = c.execute('SELECT * FROM chat'.format(userr))[:15].fetchall()
	conn.close()

if __name__ == '__main__':
	app.run()
