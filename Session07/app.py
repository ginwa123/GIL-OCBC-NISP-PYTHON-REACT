from flask import Flask
from flask import render_template
from flask import request

app = Flask(__name__, template_folder="templates")

# @app.route("/index")
# def index():
# 	context = {
# 		"name": "gilang",
# 		"alamat": "dk karangan tengah"
# 	}
# 	return render_template("index.html", context=context)


# @app.route('/hello_world')
# def hello_world():
# 	return 'Hello, World!'

users_dummy = [
	{
		"id": 1,
		"name": "gilang",
		"alamat": "dk karangan tengah"
	},
	{
		"id": 2,
		"name": "miyuki",
		"alamat": "grand line 29"
	}
]


# @app.route("/users", methods=["GET"])
# def get_all_user():
# 	return render_template("index.html", users=get_all_user)


@app.route("/users", methods=["GET", "POST"])
@app.route("/users/<int:id>", methods=["GET", "PUT", "DELETE"])
def users(id=None):
	sort = request.args.get("sort")
	if request.method == "GET" and id is None:  # get all user
		return render_template("index.html", users=users_dummy, sort=sort)
	elif request.method == "POST" and id is None:  # create user
		# todo
		pass
	elif request.method == "GET" and id is not None:  # get user by id
		user = None
		for i in users_dummy:
			if i["id"] == id:
				user = i
				break
		return render_template("index.html", user=user)
	elif request.method == "PUT" and id is not None:  # update user
		# todo
		pass


#
# @app.route('/login', methods=['GET', 'POST'])
# def login():
# 	if request.method == 'POST':
# 		return do_the_login()
# 	else:
# 		return show_the_login_form()
#

if __name__ == '__main__':
	app.run(debug=True)
