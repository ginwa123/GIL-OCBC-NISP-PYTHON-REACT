How to run flask app in local

```
1. Comment this code app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://" + os.environ.get('DATABASE_URL', None)[11:] in app.py
2. Uncomment this code # app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join(basedir, 'people.db') in app.py
3. flask run in CLI
4. open  http://127.0.0.1:5000/
```
