import sys

from flask import request, make_response
from flask_sqlalchemy import Pagination
from werkzeug.exceptions import abort

from app import db
from app.directors.models import Director
from app.movies.models import MovieSchema, Movie


def _order_by(order_by, is_asc=True):
	if order_by == "popularity":
		if is_asc:
			return Movie.popularity.asc()
		return Movie.popularity.desc()
	elif order_by == "budget":
		if is_asc:
			return Movie.budget.asc()
		return Movie.budget.desc()
	elif order_by == "revenue":
		if is_asc:
			return Movie.revenue.asc()
		return Movie.revenue.desc()
	elif order_by == "vote_average":
		if is_asc:
			return Movie.vote_average.asc()
		return Movie.vote_average.desc()
	elif order_by == "vote_count":
		if is_asc:
			return Movie.vote_count.asc()
		return Movie.vote_count.desc()
	elif order_by == "release_date":
		if is_asc:
			return Movie.release_date.asc()
		return Movie.release_date.desc()
	elif order_by == "original_title":
		if is_asc:
			return Movie.original_title.asc()
		return Movie.original_title.desc()
	else:
		if is_asc:
			return Movie.title.asc()
		return Movie.title.desc()


def _search_keyword_type(search_keyword_type, search_keyword):
	search_keyword = "%{}%".format(search_keyword)
	if search_keyword_type == "original_title":
		return Movie.original_title.like(search_keyword)
	elif search_keyword_type == "tagline":
		return Movie.tagline.like(search_keyword)
	elif search_keyword_type == "overview":
		return Movie.overview.like(search_keyword)
	else:
		return Movie.title.like(search_keyword)


def read_all(page=1, per_page=10, order_by="title", is_asc=True, search_keyword_type="title",
			 search_keyword="", ):
	"""
	Read all movies

	:param page: number of page
	:param per_page: number items per page
	:param order_by: order movies based on movie column such as title, name, original_title, etc
	:param is_asc: sort movies asc or desc
	:param search_keyword_type: search movies based on movie column such as original_title, title,
	tagline, and overview
	:param search_keyword: search movie based on search_keyword_type
	:return: 200 on successful
	"""

	movie: Pagination = Movie.query \
		.filter(_search_keyword_type(search_keyword_type, search_keyword)) \
		.order_by(_order_by(order_by, is_asc)) \
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
	"""
	Read one movie

	:param id: id of the movie
	:return: 200 on successful, 404 on failure movie not found
	"""
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
	"""
	Create movie using movie object

	:return: 201 on successfull, 409 on failure uid conflicted
	"""
	movie = request.json
	uid = movie.get("uid")
	director_id = movie.get("director_id")

	existing_movie = Movie.query.filter(Movie.uid == uid).one_or_none()
	existing_director = Director.query.filter(Director.id == director_id).one_or_none()
	print(existing_movie, existing_director)
	if existing_movie is None and bool(existing_director):
		schema = MovieSchema()
		new_movie = schema.load(movie)
		db.session.add(new_movie)
		db.session.commit()
		data = schema.dump(new_movie)
		return data, 201
	elif existing_movie is not None:
		abort(409, f"Movie with uid : {uid}  exists already"),
	elif not bool(existing_director):
		abort(404, f"Director with id {director_id} not found")
	else:
		abort(500, "something wrong")


def update(id):
	"""
	Update one movie by id using movie object

	:param id: id of the movie
	:return: 200 on successful, 404 on failure movie not found, 409 on failure  uid exists
	"""
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
	"""
	Delete one movie by id

	:param id: id of the movie
	:return: 200 on successful, 404 on failure movie not found
	"""
	director = Movie.query.filter(Movie.id == id).one_or_none()

	if director is not None:
		db.session.delete(director)
		db.session.commit()
		return make_response({
			"detail": f"Movie {id} deleted"
		}), 200

	else:
		abort(404, f"Movie not found for Id: {id}", )
