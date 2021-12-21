# list of vowels
# vowels = ['a', 'e', 'i', 'o', 'u']
# vowels_iter = iter(vowels)
#
# print(next(vowels_iter))    # 'a'
# print(next(vowels_iter))    # 'e'
# print(next(vowels_iter))    # 'i'
# print(next(vowels_iter))    # 'o'
# print(next(vowels_iter))    # 'u'


# def my_generator():
# 	print("Inside my generator")
# 	yield 'a'
# 	yield 'b'
# 	yield 'c'
#
#
# for char in my_generator():
# 	print(char)


# def counter_generator(low, high):
# 	while low <= high:
# 		yield low
# 		low += 1
#
#
# for i in counter_generator(5, 10):
# 	print(i, end=' ')

#
# def say_hello(name):
#     return f"Hello {name}"
#
# def be_awesome(name):
#     return f"Yo {name}, together we are the awesomest!"
#
# def greet_bob(greeter_func):
#     return greeter_func("Bob")
#
# print(greet_bob(say_hello))
#
# print(greet_bob(be_awesome))
#

# def parent(num):
# 	def first_child():
# 		return "Hi, I am Emma"
#
# 	def second_child():
# 		return "Call me Liam"
#
# 	if num == 1:
# 		return first_child
# 	else:
# 		return second_child
#
#
# first = parent(1)
# print(first())

# def my_decorator(func):
# 	def wrapper():
# 		print("Something is happening before the function is called.")
# 		func()
# 		print("Something is happening after the function is called.")
#
# 	return wrapper
#
#
# def say_whee():
# 	print("Whee!")
#
#
# say_whee = my_decorator(say_whee)
# print(say_whee())


# def my_decorator(func):
#     def wrapper():
#         print("Something is happening before the function is called.")
#         func()
#         print("Something is happening after the function is called.")
#     return wrapper
#
# @my_decorator
# def say_whee():
#     print("Whee!")
#
#
# say_whee()

import functools

import time

def timer(func):
    """Print the runtime of the decorated function"""
    @functools.wraps(func)
    def wrapper_timer(*args, **kwargs):
        start_time = time.perf_counter()    # 1
        value = func(*args, **kwargs)
        end_time = time.perf_counter()      # 2
        run_time = end_time - start_time    # 3
        print(f"Finished {func.__name__!r} in {run_time:.4f} secs")
        return value
    return wrapper_timer

@timer
def waste_some_time(num_times):
    for _ in range(num_times):
        sum([i**2 for i in range(10000)])

waste_some_time(1)