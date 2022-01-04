import datetime
from flask import Flask, jsonify
from flask_cors import CORS
import pytz

app = Flask(__name__)
CORS(app)


@app.route("/time")
def get_current_time():
    return jsonify({"time": datetime.datetime.now(pytz.timezone('Asia/Jakarta'))})


if __name__ == '__main__':
	app.run(threaded=True)