import os

import connexion
from connexion import FlaskApp
from dotenv import load_dotenv
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy

load_dotenv()
basedir = os.path.abspath(os.path.dirname(__file__))


def set_connexion_app():
	return connexion.App(__name__, specification_dir=basedir)


def set_flask_app(connexion_app):
	app = connexion_app.app
	app.config['SQLALCHEMY_ECHO'] = True
	app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'flaskr/H8xOCBC.db')
	app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
	return app


def set_db(app):
	db = SQLAlchemy(app)
	ma = Marshmallow(app)
	return db, ma


def set_api(connexion_app: FlaskApp):
	connexion_app.add_api("avocado_swagger.yml", )


connexion_app = set_connexion_app()
app = set_flask_app(connexion_app)
db, ma = set_db(app)
set_api(connexion_app)


if __name__ == '__main__':
	app.run()
