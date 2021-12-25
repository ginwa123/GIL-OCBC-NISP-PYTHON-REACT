import unittest

# import unittest
#
#
# # Create a class called TestSum that inherits from the TestCase class
# class TestSum(unittest.TestCase):
#
# 	# def test_sum():
# 	def test_sum(self):
# 		# assert sum([1, 2, 3]) == 6, "Should be 6"
# 		self.assertEqual(sum([1, 2, 3]), 6, "Should be 6")
#
# 	# def test_sum_tuple():
# 	def test_sum_tuple(self):
# 		# assert sum((1, 2, 2)) == 6, "Should be 6"
# 		self.assertEqual(sum([1, 2, 2]), 6, "Should be 6")
#
#
# if __name__ == '__main__':
# 	unittest.main()

from my_sum import sum


class TestSum(unittest.TestCase):
	def test_list_int(self):
		"""
		Test that it can sum a list of integers
		"""
		data = [1, 2, 3]
		result = sum(data)
		self.assertEqual(result, 6)


if __name__ == '__main__':
	unittest.main()
