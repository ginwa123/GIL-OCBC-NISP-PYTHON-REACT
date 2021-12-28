import sys

from flask import request, make_response
from flask_sqlalchemy import Pagination
from werkzeug.exceptions import abort
from app import db
from app.directors.models import Director, DirectorSchema
from app.movies.models import MovieSchema, Movie


def read_all(page=1, per_page=10,  search=""):
	search = "%{}%".format(search)
	movie: Pagination = Movie.query.filter(Movie.title.like(search)) \
		.paginate(page=page, per_page=per_page)

	context = {
		"has_next": movie.has_next,
		"has_prev": movie.has_prev,
		"page": movie.page,
		"per_page": movie.per_page,
		"total": movie.total,
		"items": MovieSchema().dump(movie.items, many=True)
	}
	return context, 200


def read_one(id):
	movie = Movie.query \
		.join(Director) \
		.filter(Movie.id == id) \
		.one_or_none()
	if movie is not None:
		schema = MovieSchema().dump(movie)
		return schema
	else:
		abort(404, f"Movie not found for Id: {id}")


#
def create():
	director = request.json
	uid = director.get("uid")

	existing_director = Movie.query.filter(Movie.uid == uid).one_or_none()

	if existing_director is None:
		schema = MovieSchema()
		new_director = schema.load(director)
		db.session.add(new_director)
		db.session.commit()
		data = schema.dump(new_director)

		return data, 201
	else:
		abort(409, f"Movie with uid : {uid}  exists already"),


def update(id):
	movie = request.json
	update_director = Movie.query.filter(
		Movie.id == id
	).one_or_none()

	uid = movie.get("uid")

	if update_director is None:
		abort(404, f"Movie not found for Id: {id}", )
	else:
		try:
			schema = MovieSchema()
			update = schema.load(movie)
			update.id = update_director.id
			db.session.merge(update)
			db.session.commit()
			data = schema.dump(update_director)
			return data, 200
		except Exception as ex:
			ex_type, ex_value, ex_traceback = sys.exc_info()
			print("Exception type : %s " % ex_type.__name__)
			print("Exception message : %s" % ex_value)
			if ex_type.__name__ == "IntegrityError":
				return abort(409, f"movie with uid : {uid}  exists already"),
			return abort(500, ex)


def delete(id):
	director = Movie.query.filter(Movie.id == id).one_or_none()

	if director is not None:
		db.session.delete(director)
		db.session.commit()
		return make_response(f"Movie {id} deleted"), 200

	else:
		abort(404, f"Movie not found for Id: {id}", )
