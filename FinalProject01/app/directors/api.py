import sys

from flask import request, make_response
from flask_sqlalchemy import Pagination
from werkzeug.exceptions import abort

from app import db
from .models import Director, DirectorMoviesSchema, DirectorSchema


def read_all(page=1, per_page=10, include_movies=True, search_keyword=""):
	"""
	Read All Director order by name

	:param page: number of page
	:param per_page: number items per page d
	:param include_movies: include data movies ?
	:param search_keyword: Search director by name
	:return: 200 on Successful
	"""
	search_keyword = "%{}%".format(search_keyword)
	director: Pagination = Director.query \
		.filter(Director.name.like(search_keyword)) \
		.order_by(Director.name.asc()) \
		.paginate(page=page, per_page=per_page)

	context = {
		"has_next": director.has_next,
		"has_prev": director.has_prev,
		"page": director.page,
		"per_page": director.per_page,
		"total": director.total,
		"items": DirectorMoviesSchema().dump(director.items, many=True) if include_movies
		else DirectorSchema().dump(director.items, many=True)
	}
	return context, 200


def read_one(id, include_movies=True, ):
	"""
	Read One director by id

	:param id: id of the director
	:param include_movies: include data movies ?
	:returns: 200 on Successful, 404 on failure because director not found
	"""
	director = Director.query.filter(Director.id == id).one_or_none()
	if director is not None:
		if include_movies:
			director_schema = DirectorMoviesSchema()
		else:
			director_schema = DirectorSchema()
		return director_schema.dump(director)
	else:
		abort(404, f"Director not found for Id: {id}")


def create():
	"""
	Create one director using director object

	:return: 201 on successful, 409 on error uid exists
	"""
	director = request.json
	uid = director.get("uid")

	existing_director = Director.query.filter(Director.uid == uid).one_or_none()

	if existing_director is None:
		schema = DirectorMoviesSchema()
		new_director = schema.load(director)
		db.session.add(new_director)
		db.session.commit()
		data = schema.dump(new_director)
		return data, 201
	else:
		abort(409, f"Director with uid : {uid}  exists already"),


def update(id):
	"""
	Update one director by id using director object

	:param id: id of the director
	:return: 200 on successful, 404 on failure id not found, 409 on failure  uid exists
	"""
	director = request.json
	update_director = Director.query \
		.filter(Director.id == id) \
		.one_or_none()

	uid = director.get("uid")

	if update_director is None:
		abort(404, f"Director not found for Id: {id}", )
	else:
		try:
			schema = DirectorMoviesSchema()
			update = schema.load(director)
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
				return abort(409, f"Conflict with uid : {uid}  exists already"),
			return abort(500, ex)


def delete(id):
	"""
	Delete one director by id

	:param id: id of the director
	:return: 200 on successful, 404 on failure director not found
	"""
	director = Director.query.filter(Director.id == id).one_or_none()

	if director is not None:
		db.session.delete(director)
		db.session.commit()
		return make_response({
			"detail": f"Director {id} deleted"
		}), 200

	else:
		abort(404, f"Director not found for Id: {id}", )
