# from my_sum import sum
#
#
# def test_sum():
# 	# assert sum([1, 2, 3]) == 6, "Should be 6"
# 	# assert my_sum([1,2,3]) == 6, "Should be 6"
# 	assert sum(1, 2, 3) == 6, "Should be 6"
#
#
# def test_sum_tuple():
# 	# assert sum((1, 2, 2)) == 6, "Should be 6"
# 	# assert my_sum((1, 2, 1)) == 6, "Should e 6"
# 	assert sum(1, 2, 1) == 6, "Should be 6"
# import unittest
#
# from my_sum import sum
#
#
# class TestSum(unittest.TestCase):
# 	def test_list_int(self):
# 		"""
# 		Test that it can sum a list of integers
# 		"""
# 		data = [1, 2, 3]
# 		result = sum(data)
# 		self.assertEqual(result, 6)
#
#
# if __name__ == '__main__':
# 	unittest.main()


import unittest
from fractions import Fraction

from my_sum import sum


class TestSum(unittest.TestCase):
	def test_list_int(self):
		"""
		Test that it can sum a list of integers
		"""
		data = [1, 2, 3]
		result = sum(data)
		self.assertEqual(result, 6)

	def test_list_fraction(self):
		"""
		Test that it can sum a list of fractions
		"""
		data = [Fraction(1, 4), Fraction(1, 4), Fraction(2, 5)]
		result = sum(data)
		self.assertEqual(result, 1)

	def test_bad_type(self):
		data = "banana"
		with self.assertRaises(TypeError):
			result = sum(data)


if __name__ == '__main__':
	unittest.main()
