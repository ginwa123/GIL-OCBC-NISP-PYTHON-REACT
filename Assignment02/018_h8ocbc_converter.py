## Nama			: Gilang Trisetya Indrawan
## Kode Peserta	: FSDO002ONL018
## Github Url	: 1. Sesi3 https://github.com/ginwa123/GIL-OCBC-NISP-PYTHON-REACT/tree/main/Session03
##				  2. Sesi4 https://github.com/ginwa123/GIL-OCBC-NISP-PYTHON-REACT/tree/main/Session04


def kelvin_to_celsius(input):
	"""
	Convert kelvin to celsius

	:param input: float or int
	:return: float
	"""
	formula = input - 273.15
	return formula


def celcius_to_kelvin(input):
	"""
	Convert celsius to kelvin

	:param input: float or int
	:return: float
	"""
	formula = input + 273.15
	return formula


def celsius_to_fahrenheit(input):
	"""
	Convert celsius to fahrenheit

	:param input: float or int
	:return: float
	"""
	return (input * 9 / 5) + 32


def kelvin_to_fahrenheit(input):
	"""
	Convert kelvin to fahrenheit

	:param input: float or int
	:return: float
	"""
	return (input - 273.15) * 9 / 5 + 32


def to_fahrenheit(input, input_type="celsius"):
	"""
	Convert celsius to fahrenheit or \n
	convert kelvin to fahrenheit

	:param input: float or int
	:param input_type: "celsius" or "kelvin" default is "celsius"
	:return: float
	:raise Exception: if input_type is not "celsius" or "kelvin"
	"""
	if input_type == "celsius":
		result = celsius_to_fahrenheit(input)
	elif input_type == "kelvin":
		result = kelvin_to_fahrenheit(input)
	else:
		raise Exception("input type not found")
	return result


def fahrenheit_to_celsius(input):
	"""
	Convert fahrenheit to celsius

	:param input: float or int
	:return: float
	"""
	return (input - 32) * 5 / 9


def fahrenheit_to_kelvin(input):
	"""
	Convert fahrenheit to kelvin

	:param input: float or int
	:return: float
	"""
	return (input - 32) * 5 / 9 + 273.15


def from_fahrenheit(input, output_type="celsius"):
	"""
	Convert fahrenheit to celsius or \n
	convert fahrenheit to kelvin

	:param input: float or int
	:param output_type: "celsius" or "kelvin" default is "celsius"
	:return: float
	:raise Exception: if output_type is not "celsius" or "kelvin"
	"""
	if output_type == "celsius":
		result = fahrenheit_to_celsius(input)
	elif output_type == "kelvin":
		result = fahrenheit_to_kelvin(input)
	else:
		raise Exception("output type not found")
	return result


# Buatlah sebuah function yang dapat mengkonversi suhu dari kelvin ke celcius, dan celcius ke kelvin.
print(f"400 Kelvin == {kelvin_to_celsius(400)} °C")
print(f"126.85000000000002 °C == {celcius_to_kelvin(126.85000000000002)} Kelvin")

# Buatlah sebuah function yang dapat mengkonversi suhu ke fahrenheit.
# Tambahkan parameter untuk memastikan bahwa argumen yang dimasukan adalah celcius atau kelvin.
# Panggil function yang pertama jika diperlukan.
print(f"400 °C == {to_fahrenheit(400, input_type='celsius')} °F")
print(f"400 Kelvin == {to_fahrenheit(400, input_type='kelvin')} °F")

# Buatlah sebuah function yang dapat mengkonversi suhu dari fahrenheit.
# Berikan argumen untuk memastikan bahwa outputnya dalah celcius atau kelvin.
print(f"752 °F == {from_fahrenheit(752, output_type='celsius')} °C")
print(f"260.33000000000004 °F == {from_fahrenheit(260.33000000000004, output_type='kelvin')} Kelvin")
