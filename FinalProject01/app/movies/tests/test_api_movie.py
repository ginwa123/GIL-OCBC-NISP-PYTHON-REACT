import json
import unittest

import pytest

from run import app


class MyTestCase(unittest.TestCase):
	id_movie = None

	def setUp(self) -> None:
		super().setUp()
		self.app = app
		self.client = self.app.test_client()

	@pytest.mark.order(1)
	def test_create_movie(self):
		request_body = {
			"budget": 0,
			"director_id": 4762,
			"original_title": "film tembak",
			"overview": "pokoknya keren",
			"popularity": 123141,
			"release_date": "2021-10-01",
			"revenue": 8274123,
			"tagline": "action",
			"title": "rambo",
			"uid": 287642,
			"vote_average": 8254,
			"vote_count": 72732
		}
		response = self.client.post("/api/movies", content_type='application/json', data=json.dumps(request_body))
		data = json.loads(response.get_data(as_text=True))
		print(data)
		self.__class__.id_movie = data["id"]
		self.assertIsNotNone(data)
		self.assertEqual(data["title"], request_body["title"])

	@pytest.mark.order(2)
	def test_create_movie2_conflict_uid(self):
		request_body = {
			"budget": 0,
			"director_id": 4762,
			"original_title": "film tembak",
			"overview": "pokoknya keren",
			"popularity": 123141,
			"release_date": "2021-10-01",
			"revenue": 8274123,
			"tagline": "action",
			"title": "rambo",
			"uid": 287642,
			"vote_average": 8254,
			"vote_count": 72732
		}
		response = self.client.post("/api/movies", content_type='application/json', data=json.dumps(request_body))
		data = json.loads(response.get_data(as_text=True))
		print(data)
		self.assertEqual(409, data["status"])

	@pytest.mark.order(3)
	def test_create_movie2_director_not_found(self):
		request_body = {
			"budget": 0,
			"director_id": 8741892321,
			"original_title": "film tembak",
			"overview": "pokoknya keren",
			"popularity": 123141,
			"release_date": "2021-10-01",
			"revenue": 8274123,
			"tagline": "action",
			"title": "rambo",
			"uid": 22151,
			"vote_average": 8254,
			"vote_count": 72732
		}
		response = self.client.post("/api/movies", content_type='application/json', data=json.dumps(request_body))
		data = json.loads(response.get_data(as_text=True))
		print(data)
		self.assertEqual(404, data["status"])

	@pytest.mark.order(4)
	def test_delete_movie(self):
		response = self.client.delete(f"/api/movies/{self.__class__.id_movie}", content_type='application/json', )
		data = json.loads(response.get_data(as_text=True))
		print(data)
		self.assertIsNotNone(data)
