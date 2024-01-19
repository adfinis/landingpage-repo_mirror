#!/usr/bin/env python3

from flask import Flask
from httpx import get
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/<path:path>', methods=['GET'])
def forward_request(path):
    return get(f"https://pkg.adfinis.com/{path}").text

if __name__ == '__main__':
    app.run(debug=True, port=4201)   
