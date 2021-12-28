import unittest

import pytest
from flask_sqlalchemy import Pagination

from app import create_app, db
from app.directors.models import Director, DirectorMoviesSchema


class MyTestCase(unittest.TestCase):
	def setUp(self) -> None:
		super().setUp()
		self.app = create_app()
		self.db = db
		self.director = {
			"name": "gilang tri",
			"uid": 2883,
			"gender": 2,
			"department": "Directing"
		}
		self.director_schema = DirectorMoviesSchema()

	def tearDown(self) -> None:
		super().tearDown()

	@pytest.mark.order(1)
	def test_create_director(self):
		with self.app.app_context():
			self.db.session.add(self.director_schema.load(self.director))
			self.db.session.commit()
			director = Director.query.filter(Director.uid == self.director["uid"]) \
				.one_or_none()
			print(self.director_schema.dump(director))
			self.assertIsNotNone(director)

	@pytest.mark.order(2)
	def test_get_director(self):
		with self.app.app_context():
			director = Director.query.filter(Director.uid == self.director["uid"]) \
				.one_or_none()
			print(self.director_schema.dump(director))
			self.assertIsNotNone(self.director_schema.dump(director))

	@pytest.mark.order(3)
	def test_update_director(self):
		with self.app.app_context():
			update_director = Director.query.filter(Director.uid == self.director["uid"]).one_or_none()
			update_director.name = "gilang tri new"

			db.session.commit()
			director = Director.query.filter(Director.uid == self.director["uid"]) \
				.filter(Director.name == "gilang tri new") \
				.one_or_none()
			print(self.director_schema.dump(director))
			self.assertIsNotNone(self.director_schema.dump(director))

	@pytest.mark.order(4)
	def test_get_director(self):
		with self.app.app_context():
			director = Director.query.filter(Director.uid == self.director["uid"]) \
				.filter(Director.name == "gilang tri new") \
				.one_or_none()
			print(self.director_schema.dump(director))
			self.assertIsNotNone(self.director_schema.dump(director))

	@pytest.mark.order(5)
	def test_delete_director(self):
		with self.app.app_context():
			director = Director.query.filter(Director.uid == self.director["uid"]) \
				.one_or_none()
			db.session.delete(director)
			db.session.commit()

	@pytest.mark.order(6)
	def test_get_delete_director(self):
		with self.app.app_context():
			director = Director.query.filter(Director.uid == self.director["uid"]) \
				.one_or_none()
			print(self.director_schema.dump(director))
			self.assertIsNotNone(self.director_schema.dump(director))

	@pytest.mark.order(7)
	def test_get_paginate(self):
		with self.app.app_context():
			director: Pagination = Director.query.filter() \
				.paginate(page=1, per_page=10)
			context = {
				"has_next": director.has_next,
				"has_prev": director.has_prev,
				"page": director.page,
				"per_page": director.per_page,
				"total": director.total,
				"items": DirectorMoviesSchema().dump(director.items, many=True)
			}
			print(context)
			self.assertIsNotNone(context)
			self.assertEqual(director.has_next, True)


if __name__ == '__main__':
	unittest.main()
