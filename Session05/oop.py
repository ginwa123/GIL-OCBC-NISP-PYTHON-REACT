class Dog:
	# Class attribute
	species = "Canis familiaris"

	def __init__(self, name, age):
		self.name = name
		self.age = age

	def description(self):
		return f"{self.name} is {self.age} years old"

	def __str__(self):
		return f"{self.name} is {self.age} years old"

	# Another instance method
	def speak(self, sound):
		return f"{self.name} says {sound}"


#
# my_dog = Dog("gilang", 10)
# print(my_dog.name, my_dog.age, my_dog.species)
# print(my_dog.description())
# print(my_dog.speak("wang wang"))


class BullDog(Dog):
	species = "Bulldog"

	def __init__(self, name, age):
		super().__init__(name, age)

	def speak(self, sound="woof wooof"):
		return super().speak(sound) + " from child"

	def description(self):
		return super().description()


my_bull_dog = BullDog("lili", 10)
print(my_bull_dog)
print(my_bull_dog.speak())

