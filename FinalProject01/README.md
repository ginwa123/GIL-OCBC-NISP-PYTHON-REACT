# Final project python

## Run in local host

1. Create virtual environment example `py -3.10 -m venv venv` then activate that virtual environment
2. Install requirements modules `pip install -r requirements.txt`
3. Change environment variable .env `FLASK_ENV` from `production` to `development`
4. Run flask app in cli `python run.py`

## Deploy in heroku

1. Change environment variable .env `FLASK_ENV` to `production`
2. Create app in heroku
3. Install add-on HerokuPostgreSql
4. Push this project to heroku app
5. Create database in cli `heroku flask db upgrade`
6. Enjoy
