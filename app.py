import requests
from flask import Flask, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/quote')
def get_quote():
    response = requests.get("https://api.quotable.io/random", verify=False)
    return jsonify(response.json())


if __name__ == '__main__':
    app.run(debug=True)
