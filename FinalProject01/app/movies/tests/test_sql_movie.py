import unittest

from app.directors.models import Director, DirectorSchema
from app.movies.models import Movie, MovieSchema

from run import app


class MyTestCase(unittest.TestCase):

	def setUp(self) -> None:
		super().setUp()
		self.app = app
		self.client = self.app.test_client()

	def test_get_one_join(self):
		with self.app.app_context():
			# movie = db.session.query(Movie, Director)\
			# 	.join(Director, Movie.director_id == Director.id)\
			# 	.filter(Movie.id == 43597) \
			# 	.one_or_none()
			# print(movie)# Movie object, Director Object
			# schema = MovieSchema().dump(movie[0])
			# schema["director"] = DirectorSchema().dump(movie[1])
			# print(schema)
			# self.assertEqual(schema["director"]["name"], "James Cameron")
			movies = Movie.query \
				.join(Director) \
				.filter(Movie.id == 43597) \
				.one_or_none()
			schema = MovieSchema().dump(movies)
			print(schema)
			self.assertEqual(schema["director"]["name"], "James Cameron")

	def test_get_all_join(self):
		with self.app.app_context():
			# movies = db.session.query(Movie, Director)\
			# 	.join(Director, Movie.director_id == Director.id)\
			# 	.limit(3) \
			# 	.all()
			# print(movies)# Movie object, Director Object
			movies = Movie.query \
				.join(Director) \
				.limit(3) \
				.all()
			schema = MovieSchema().dump(movies, many=True)
			print(schema)
			self.assertEqual(len(schema), 3)
		# schema = MovieSchema().dump(movies[0])
		# schema["director"] = DirectorSchema().dump(movies[1])
		# print(schema)
		# self.assertEqual(schema["director"]["name"], "James Cameron")


if __name__ == '__main__':
	unittest.main()
