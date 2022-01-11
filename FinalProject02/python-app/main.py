#   an simple flask backend
import os

from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS
############################ Choose Models ############################
# from dbms.json_db.model import Model
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow



load_dotenv()

############################ Initialization ############################

db = SQLAlchemy()
migrate = Migrate(compare_type=True)
ma = Marshmallow()

def create_app():
    app = Flask(__name__)
    if os.environ["FLASK_ENV"] == "development":
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test3.db'
    else:
        app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://" + os.environ.get('DATABASE_URL', None)[11:]
    db.init_app(app)
    migrate.init_app(app, db)
    ma.init_app(app)
    CORS(app)
    create_model()
    from routes import create_routes
    create_routes(app)
    return app


def create_model():
    from dbms.dict_db.model import Model
    model = Model()
    return model


# this essitial for Cross Origin Resource Sharing with React frontend
# https://flask-cors.readthedocs.io/en/latest/

# use database
# model = create_model()




