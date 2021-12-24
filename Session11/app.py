import os

import connexion
from dotenv import load_dotenv
from flask import render_template
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy

load_dotenv()
basedir = os.path.abspath(os.path.dirname(__file__))
connexion_app = connexion.App(__name__, specification_dir=basedir)

app = connexion_app.app
# Configure the SQLAlchemy part of the app instance
app.config['SQLALCHEMY_ECHO'] = True
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'people.db')
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://" + os.environ.get('DATABASE_URL', None)[11:]
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Create the SQLAlchemy db instance
db = SQLAlchemy(app)

# Initialize Marshmallow
ma = Marshmallow(app)

connexion_app.add_api('people_swagger.yml')


@app.route("/")
def home():
	"""
	This function just responds to the browser URL
	localhost:5000/
	:return:        the rendered template "home.html"
	"""
	return render_template("index.html")


# db.create_all()
if __name__ == '__main__':
	app.run()
