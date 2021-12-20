# try:
# 	file = open("Hack8_Sample_Text.txt", "r")
# 	print(file.read())
#
# finally:
# 	file.close()
#
# with open("sample.txt", 'w', encoding='utf-8') as f:
# 	f.write("my first file\n")
# 	f.write("This file\n\n")
# 	f.write("contains three lines\n")


# try:
# 	f = open("sample.txt", 'r', encoding='utf-8')
#
# 	print(f.read(4))
# 	print(f.tell())
# finally:
# 	f.close()

# x = 10
# if x > 4:
# 	raise Exception("x is greather than 4")


# x = 10
#
# try:
# 	if x > 4:
# 		raise Exception("error cause x is greather than 4")
# except Exception as e:
# 	print(e)

import sys

print(sys.platform)


def os_interaction():
	assert ('linux' in sys.platform), "Function can only run on Linux systems."
	assert ('win32' in sys.platform), "This code runs on Windows only."
	print('Doing something.')


try:
	os_interaction()
except AssertionError as error:
	print(error)
	print('The os_interaction() function was not executed')
else:
	print('Executing the else clause.')
finally:
	print('Cleaning up, irrespective of any exceptions.')
	print("end")
