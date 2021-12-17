## Nama			: Gilang Trisetya Indrawan
## Kode Peserta	: FSDO002ONL018
## Github Url	: 1. Sesi1 https://github.com/ginwa123/GIL-OCBC-NISP-PYTHON-REACT/tree/main/Session01
##				  2. Sesi2 https://github.com/ginwa123/GIL-OCBC-NISP-PYTHON-REACT/blob/main/Session02/conditional_iterator.py

numbers = [
	951, 402, 984, 651, 360, 69, 408, 319, 601, 485, 980, 507,
	725, 547, 544, 615, 83, 165, 141, 501, 263, 617, 865, 575,
	219, 390, 984, 592, 236, 105, 942, 941, 386, 462, 47, 418,
	907, 344, 236, 375, 823, 566, 597, 978, 328, 615, 953, 345,
	399, 162, 758, 219, 918, 237, 412, 566, 826, 248, 866, 950,
	626, 949
]

# Assignment
for i in numbers:
	if i % 2 == 0 and not i > 918:
		print(i)
print("Done")

# Non-Graded Assignment
## Mampu membuat looping menggunakan for / while
## Mampu mengimplementasikan if statement didalam looping
## Mampu mengimplementasikan else statement didalam looping
# i = 0
# while i < len(numbers):
# 	if numbers[i] % 2 == 0 and not numbers[i] > 918:
# 		print(numbers[i])
# 	i += 1
# else:
# 	print("Done")

## Mampu mengimplementasikan break dan continue statement didalam looping
# for i, v in enumerate(numbers):
# 	if v % 2 == 0:
# 		if not v > 918:
# 			print(v)
# 		else:
# 			continue
# 	if i >= len(numbers) - 1:
# 		print("Done")
# 		break
