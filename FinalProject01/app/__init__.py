import os

import connexion
from flask import Flask
from flask_marshmallow import Marshmallow
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
ma = Marshmallow()
migrate = Migrate(compare_type=True)


def create_app():
	"""
	Flask app
	:return: Flask
	"""
	basedir = os.path.abspath(os.path.dirname(__file__))
	connexion_app = connexion.App(__name__, specification_dir=basedir, )
	app: Flask = connexion_app.app
	if os.environ["FLASK_ENV"] == "development":
		app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test3.db'
	else:
		app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://" + os.environ.get('DATABASE_URL', None)[11:]
	app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
	app.config['SQLALCHEMY_ECHO'] = True
	db.init_app(app)
	ma.init_app(app)
	# migrate.init_app(app, db,  render_as_batch=True)
	migrate.init_app(app, db, )
	connexion_app.add_api('swagger.yml')
	return app

# from app.directors import *
# from app.movies import *
