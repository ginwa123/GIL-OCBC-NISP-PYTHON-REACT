import unittest

import pytest

from app.directors.models import Director
from app.movies.models import Movie, MovieSchema
from run import app


class MyTestCase(unittest.TestCase):

	def setUp(self) -> None:
		super().setUp()
		self.app = app
		self.client = self.app.test_client()


	@pytest.mark.order(1)
	def test_read_one_join(self):
		with self.app.app_context():
			movies = Movie.query \
				.join(Director) \
				.filter(Movie.id == 43597) \
				.one_or_none()
			schema = MovieSchema().dump(movies)
			print(schema)
			self.assertEqual(schema["director"]["name"], "James Cameron")

	@pytest.mark.order(2)
	def test_read_all_join(self):
		with self.app.app_context():
			movies = Movie.query \
				.join(Director) \
				.limit(3) \
				.all()
			schema = MovieSchema().dump(movies, many=True)
			print(schema)
			self.assertEqual(len(schema), 3)


if __name__ == '__main__':
	unittest.main()
