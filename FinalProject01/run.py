from dotenv import load_dotenv

from app import create_app

load_dotenv()

app = create_app()



# submodule


if __name__ == '__main__':
	app.run(threaded=True)
