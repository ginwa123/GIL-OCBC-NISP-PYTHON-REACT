from dotenv import load_dotenv
from werkzeug.utils import redirect

from app import create_app

load_dotenv()

app = create_app()


@app.route("/")
def hello_user():
	return redirect("/api/ui")


if __name__ == '__main__':
	app.run(threaded=True)
