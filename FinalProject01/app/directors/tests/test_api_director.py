import json
import unittest

import pytest

from run import app


class MyTestCase(unittest.TestCase):

	def setUp(self) -> None:
		super().setUp()
		self.app = app
		self.client = self.app.test_client()

	@pytest.mark.order(1)
	def test_read_page_per_page(self):
		response = self.client.get("/api/directors?page=1&per_page=10", content_type='application/json')
		data = json.loads(response.get_data(as_text=True))
		print(data)
		self.assertTrue(data["has_next"])

	@pytest.mark.order(2)
	def test_read_page_per_page_include_movies(self):
		response = self.client.get("/api/directors?page=1&per_page=10&include_movies=false",
								   content_type='application/json')
		data = json.loads(response.get_data(as_text=True))
		print(data)
		self.assertIsNone(data.get("movies", None))
		self.assertTrue(data["has_next"])

	@pytest.mark.order(3)
	def test_read_page_per_page_search(self):
		response = self.client.get(
			"/api/directors?page=1&per_page=10&include_movies=true&order_type=asc&search_keyword=Éric",
			content_type='application/json')
		data = json.loads(response.get_data(as_text=True))
		print(data)
		self.assertIsNone(data.get("movies", None))
		isFound = False
		for item in data["items"]:
			if item["name"] == "Éric Tessier":
				isFound = True
				break
		self.assertTrue(isFound)


if __name__ == '__main__':
	unittest.main()
