# def sum(nums):
# 	result = 0
# 	for n in nums:
# 		result += n
# 	return result
#
# print(sum([1, 2, 3]))
# assert sum([1, 2, 3]) == 6, "Should be 6"


# from this :
# def test_sum():
#     assert sum([1, 2, 3]) == 6, "Should be 6"

# def test_sum_tuple():
#     assert sum((1, 2, 2)) == 6, "Should be 6"

# if __name__ == "__main__":
#     test_sum()
#     test_sum_tuple()
#     print("Everything passed")

def test_sum():
	assert sum([1, 2, 3]) == 6, "Should be 6"


def test_sum_tuple():
	assert sum((1, 2, 2)) == 6, "Should be 6"
