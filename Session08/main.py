import connexion
from dotenv import load_dotenv
from flask import render_template

load_dotenv()
app = connexion.App(__name__, specification_dir='./')

app.add_api('people_swagger.yml')

app = app.app


@app.route('/')
def home():
	"""
	This function just responds to the browser ULR
	localhost:5000/
	:return:        the rendered template 'home.html'
	"""
	return render_template('index.html')


# return render_template('index.html')


# If we're running in stand alone mode, run the application
if __name__ == '__main__':
	app.run()
