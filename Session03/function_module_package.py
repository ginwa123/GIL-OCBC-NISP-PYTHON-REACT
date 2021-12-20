# def sum_2_number(n1: int, n2: int) -> int:
# 	"""
# 	sum 2 number
# 	:param n1: int
# 	:param n2: int
# 	:return: int
# 	"""
# 	total = n1 + n2
# 	return total
#
#
# n1 = 10
# n2 = 3
# print(sum_2_number(n1, n2))
#
#
# def sum_3_number(n1: int, n2: int, n3: int = 10) -> int:
# 	"""
# 	sum 3 number
# 	:param n1: int
# 	:param n2: int
# 	:param n3: int default 10
# 	:return: int
# 	"""
# 	return n1 + n2 + n3
#
#
# def arguments(s1, s2, *args):
# 	print(s1, s2)
#
# 	for i in args:
# 		print(i)
#
#
# arguments("haloo", "world", "aku", "gilang", "dari", "surabaya")
#
# sum_operator = lambda n1, n2: n1 + n2
#
# print(sum_operator(1, 2))


# def return_3_value(s1, s2):
# 	s3 = "end"
# 	return s1, s2, s3
#
#
# s1, s2, s3 = return_3_value("hello", "world")
#
# print(s1, s2, s3)
#
# import person
#
# person.display()

import sys
sys.path.append(r"D:/04. GILANG/1. OCBC NISP Fullstack Engineer Intern/Bootcamp Dev 2/Session03/simulation")

print(sys.path)

import person_copy

person_copy.display()


#