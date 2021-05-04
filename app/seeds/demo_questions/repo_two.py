# Python Examples
from app.models import db, Questions

example_repo_id = 2
example_repo_two_id = 6
question_one='''```python
list.append()
```'''
question_two='''```python
list.extend()
```'''
question_three='''```python
list.insert()
```'''
question_four='''```python
list.remove()
```'''
question_five='''```python
list.index()
```'''
question_six='''```python
list.reverse()
```'''
question_seven='''```python
list.sort()
```'''
question_eight='''```python
a.copy(), and why use it? When to use something different?
```'''
question_nine='''```python
list.clear()
```'''
question_ten='''```python
list.count()
```'''
question_eleven='''```python
list.pop()
```'''
question_twelve='''```python
any(object)
```'''
question_thirteen='''```python
all(object)
```'''
question_fourteen='''```python
ascii(list)
```'''

question_fifteen='''```python
bool(val)
```'''
question_sixteen='''```python
enumerate()
```'''
question_seventeen='''```python
filter()
```'''
question_eighteen='''```python
iter()
```'''
question_nineteen='''```python
list()
```'''
question_twenty='''How to return just the keys of a dictionary?'''

question_twenty_one='''```python
len()
```'''
question_twenty_two='''```python
max()
```'''
question_twenty_three='''```python
min()
```'''
question_twenty_four='''```python
map()
```'''
question_twenty_five='''
Difference between filter() and map()?
'''
question_twenty_six='''python
Write a map lambda function that squares a list
'''
question_twenty_seven='''```python
reversed()
```'''
question_twenty_eight='''```python
slice()
```'''
question_twenty_nine='''```python
sorted()
```'''
question_thirty='''```python
sum()
```'''
question_thirty_one='''```python
zip()
```'''
question_thirty_two='''```python
bin()
```'''
question_thirty_three='''```python
callable()
```'''
question_thirty_four='''
Check if you can use an object or if it's undefined
'''
question_thirty_five='''```python
chr()
```'''
question_thirty_six='''```python
compile()
```'''
question_thirty_seven='''
How to run python given to you as a string
'''
question_thirty_eight='''```python
complex()
```'''
question_thirty_nine='''```python
delattr()
```'''
question_forty='''```python
dict()
```'''
question_forty_one='''
Turn[('x', 5), ('y', -5)]into a dictionary
'''
question_forty_two='''```python
dir()
```'''
question_forty_three='''
How to return all available methods of an object?
'''
question_forty_four='''```python
divmod()
```'''
question_forty_five='''
Find the times 8 goes into 3, and the remainder
'''
question_forty_six='''
Say you have a function in a class, and you want to use it on the outside of the class, without the baggage of the potential args passed to it from the class via self, what do you use?
'''
question_forty_seven='''
Make a staticmethod
'''
question_forty_eight='''```python
float()
```'''
question_forty_nine='''```python
format()
```'''
question_fifty='''```python
frozenset()
```'''
question_fifty_one='''```python
getattr()
```'''
question_fifty_two='''
How to get or set a value within a class based on a variable?
'''
question_fifty_three='''
Return objects at the local or global level
'''
question_fifty_four='''```python
hasattr()
```'''
question_fifty_five='''
Check if an instance of a class contains an object from within that class
'''
question_fifty_six='''```python
hash()
```'''
question_fifty_seven='''
How to get a variable from the command line
'''
question_fifty_eight='''
Difference between is and ==
'''
question_fifty_nine='''
what does id() return?
'''
question_sixty='''
Check if an object is a class
'''
question_sixty_one='''```python
isinstantce()
```'''
question_sixty_two='''```python
issubclass()
```'''
question_sixty_three='''```python
next()
```'''
question_sixty_four='''
When to use a memoryview(obj)?
'''
question_sixty_five='''
what is object()?
'''
question_sixty_six='''```python
open()
```'''
question_sixty_seven='''
Rewrite 2**2
'''
question_sixty_eight='''
Get the printable representation of an object
'''
question_sixty_nine='''
Change the attribute of a classes object to a variable
'''
question_seventy='''
Grab a section of an iterable object
'''
question_seventy_one='''
Return the dictionary attribute of an object
'''
question_seventy_two='''```python
vars(object)
```'''
question_seventy_three='''```python
dictionary.clear()
```'''
question_seventy_four='''
Take a sequence and create a dictionary with it as your keys
'''
question_seventy_five='''```python
dict.fromkeys()
```'''
question_seventy_six='''
Why use dict[key] over object.get('key')?
'''
question_seventy_seven='''```python
dict.get()
```'''
question_seventy_eight='''
How to grab a value of a key or return a default (dicitonary)
'''
question_seventy_nine='''
Return a list of tuples from a dictionary
'''
question_eighty='''```python
dictionary.items()
```'''
question_eighty_one='''
Return a list of keys from a dictionary
'''
question_eighty_two='''
Remove an arbitrary element from a dictionary and return it
'''
question_eighty_three='''```python
dict.popitem()
```'''
question_eighty_four='''```python
dict.setdefault()
```'''
question_eighty_five='''
How to iterate over a dictionary, find the keys that don't have a value, and give them a predefined value?
'''
question_eighty_six='''
Find, remove, and return and element of a dictionary
'''
question_eighty_seven='''
Return all values of a dictionary
'''
question_eighty_eight='''```python
dict.update()
```'''

answer_one='''Add a single element to the end of a list'''
answer_two='''Add Elements of a List to Another ListTakes new list as argument'''
answer_three='''Adds Element to The ListTakes item and index as argument'''
answer_four='''Removes the first element of a list that matches the input'''
answer_five='''Gets position of first element of list that matches input'''
answer_six='''Reverse the elements of the list, in place.'''
answer_seven='''Sorts element in a list,Takes two params, key and reversekey can be len, otherwise it will just run a-z/ standard'''
answer_eight='''if a = [1,2,3]And you set:b=aAnd thenb.append(4)b = [1,2,3,4]but unforunately:a=[1,2,3,4]so to avoid this, set b = a likeb = a.copy()It returns a shallow copy. A good alternative is copy.deepcopy() if you want to catch more'''
answer_nine='''Empties a list'''
answer_ten='''Returns number of element (passed through as an arg) within a list'''
answer_eleven='''Removes item from a list at index and returns it'''
answer_twelve='''Checks if any part of an object is iterable'''
answer_thirteen='''Checks if all of the object is iterable'''
answer_fourteen='''Takes in list and returns new list with readable characters.['Python', 'Pythön', 5]->['Python', 'Pyth\xf6n', 5]'''
answer_fifteen='''Returns false if the value passed to it is:NoneFalse0emptyTrue otherwise'''
answer_sixteen='''Takes in argument of list/tuple and starting indexarg(obj, 0)Slices up the list and returns a list of tuples, this time numbered.'''
answer_seventeen='''Returns new list of items is item meets criteriaTakes in two args:function, iterableFunction tests if element is true or falseiterable is the iterable object'''
answer_eighteen='''Creates an iterable, not too important atm'''
answer_nineteen='''Creates list from an iterablewill turn "aeiou" into['a', 'e', 'i', 'o', 'u']'''
answer_twenty='''```python
list(dict)
```'''
answer_twenty_one='''Returns the length'''
answer_twenty_two='''Returns the largest element'''
answer_twenty_three='''Returns the smallest element'''
answer_twenty_four='''Takes in a function and iterable and returns a new list.'''
answer_twenty_five='''filter() doesn't change things, only checks truthiness of an item. map() mess stuff up'''
answer_twenty_six='''map(lambda x: x*x, numbers)'''
answer_twenty_seven='''Reverses a list'''
answer_twenty_eight='''Takes start, stop, stepReturns new list with above parameters'''
answer_twenty_nine='''Takes in an iterable and returns a new iterableCan take in key or reverse paramsorted(iterable, reverse=True)sorted(iterable, key=len, reverse=True)'''
answer_thirty='''Returns sum of list'''
answer_thirty_one='''Takes two iterables, pairs them into tuples, and returns one list of the tuples>>> s1 = {2, 3, 1}>>> s2 = {'b', 'a', 'c'}>>> list(zip(s1, s2))[(1, 'a'), (2, 'c'), (3, 'b')]'''
answer_thirty_two='''Converts object to a binary string'''
answer_thirty_three='''Returns true if an element is callable, or false if an element is not callable'''
answer_thirty_four='''```python
callable(x)
```'''
answer_thirty_five='''Checks the unicode value of an integer'''
answer_thirty_six='''Takes in a string and returns the compilation'''
answer_thirty_seven='''```python
compile()```'''
answer_thirty_eight='''Takes in two args, real and imag, and returns a complex number'''
answer_thirty_nine='''Deletes the named attribute of an object..Edit a class, same as just using "del"'''
answer_forty='''Takes in like:class dict(**kwarg)class dict(mapping, **kwarg)class dict(iterable, **kwarg)Can pass through an iterable object, objects with equality, or a map'''
answer_forty_one='''dict([('x', 5), ('y', -5)])'''
answer_forty_two='''Returns all available methods of an object'''
answer_forty_three='''```ptyhon
dir(object)```'''
answer_forty_four='''Takes in two numbers, the numerator and denominatorReturns the times the denominator goes into the numerator, and the remainderAll in a tuple'''
answer_forty_five='''divmod(8, 3)'''
answer_forty_six='''static_method@staticmethod decorator over your function'''
answer_forty_seven='''class Dates:def __init__(self, date):self.date = datedef getDate(self):return self.date@staticmethoddef toDashDate(date):return date.replace("/", "-")'''
answer_forty_eight='''Returns float point of number'''
answer_forty_nine='''Takes in value and format spec. Useful for making prints() look better'''
answer_fifty='''Takes an an iterable and returns an immutable set'''
answer_fifty_one='''Return the value of the named attribute of an object. So if you have a person with the age of 23 from a class, you can use:getattr(person, "age")'''
answer_fifty_two='''You have to use getattr() or setattr()'''
answer_fifty_three='''```python
locals() 
globals()
```'''
answer_fifty_four='''```python
hasattr(object, name)
Return True # if the name is one of the object's attributes.
```'''
answer_fifty_five='''``` python
hasattr(instance, name)```'''
answer_fifty_six='''Returns hash of an object (special key)'''
answer_fifty_seven='''input[prompt])'''
answer_fifty_eight='''"is" looks at the identity, which is the memory address of an object"==" looks at the value returned'''
answer_fifty_nine='''the memory space an object takes up'''
answer_sixty='''isintsance(object, class)'''
answer_sixty_one='''Takes object and class to see if the object is part of that class'''
answer_sixty_two='''Return True if class is a subclass. Takes object and class'''
answer_sixty_three='''Returns next object in an iterator'''
answer_sixty_four='''When you just need a slice of a very big dataset (I think)'''
answer_sixty_five='''Featureless object that all other objects inherit from'''
answer_sixty_six='''Returns a file object'''
answer_sixty_seven='''pow(2,2)'''
answer_sixty_eight='''repr()'''
answer_sixty_nine='''```python
setattr(var)
'''
answer_seventy='''```python
slice()
```'''
answer_seventy_one='''```python
vars(object)```'''
answer_seventy_two='''Return the dictionary attribute of an object'''
answer_seventy_three='''remove all items from a dictionary'''
answer_seventy_four='''dict.fromkeys('a', 'e', 'i', 'o', 'u'){'a': None, 'u': None, 'o': None, 'e': None, 'i': None}'''
answer_seventy_five='''Create a dictionary from an iterable list where the iterable items are the keys'''
answer_seventy_six='''dict[key] will raise an error if the key isn't present. get() returns a default value if the key is missing'''
answer_seventy_seven='''Grabs the value of a certain key'''
answer_seventy_eight='''```python
obj.get(key)
```'''
answer_seventy_nine='''```python
obj.items()
```'''
answer_eighty='''```python
Return a list of tuples from the dictionary
```'''
answer_eighty_one='''```python
obj.keys()
```'''
answer_eighty_two='''```python
dict.popitem()
```'''
answer_eighty_three='''```python
Remove an arbitrary element from a dictionary and return it
```'''
answer_eighty_four='''```python
Sets the default value of a dictionary
```'''
answer_eighty_five='''```python
dict.setdefault(key, default=value)In actual impplementation, it's like:dict.setdefault('Age', 17)
```'''
answer_eighty_six='''```python
dict.pop('key')
```'''
answer_eighty_seven='''```python
dict.values()
```'''
answer_eighty_eight='''```python
Updates a dictionary when an iterable with key/pair is passed through
```'''

# ! Markdown Examples
def seed_example_two_questions():
    seed_list = [
        Questions(repo_id=example_repo_id,question=question_one,answer=answer_one),
        Questions(repo_id=example_repo_id,question=question_two,answer=answer_two),
        Questions(repo_id=example_repo_id,question=question_three,answer=answer_three),
        Questions(repo_id=example_repo_id,question=question_four,answer=answer_four),
        Questions(repo_id=example_repo_id,question=question_five,answer=answer_five),
        Questions(repo_id=example_repo_id,question=question_six,answer=answer_six),
        Questions(repo_id=example_repo_id,question=question_seven,answer=answer_seven),
        Questions(repo_id=example_repo_id,question=question_eight,answer=answer_eight),
        Questions(repo_id=example_repo_id,question=question_nine,answer=answer_nine),
        Questions(repo_id=example_repo_id,question=question_ten,answer=answer_ten),
        Questions(repo_id=example_repo_id,question=question_eleven,answer=answer_eleven),
        Questions(repo_id=example_repo_id,question=question_twelve,answer=answer_twelve),
        Questions(repo_id=example_repo_id,question=question_thirteen,answer=answer_thirteen),
        Questions(repo_id=example_repo_id,question=question_fourteen,answer=answer_fourteen),
        Questions(repo_id=example_repo_id,question=question_fifteen,answer=answer_fifteen),
        Questions(repo_id=example_repo_id,question=question_sixteen,answer=answer_sixteen),
        Questions(repo_id=example_repo_id,question=question_seventeen,answer=answer_seventeen),
        Questions(repo_id=example_repo_id,question=question_eighteen,answer=answer_eighteen),
        Questions(repo_id=example_repo_id,question=question_nineteen,answer=answer_nineteen),
        Questions(repo_id=example_repo_id,question=question_twenty,answer=answer_twenty),
        Questions(repo_id=example_repo_id,question=question_twenty_one,answer=answer_twenty_one),
        Questions(repo_id=example_repo_id,question=question_twenty_two,answer=answer_twenty_two),
        Questions(repo_id=example_repo_id,question=question_twenty_three,answer=answer_twenty_three),
        Questions(repo_id=example_repo_id,question=question_twenty_four,answer=answer_twenty_four),
        Questions(repo_id=example_repo_id,question=question_twenty_five,answer=answer_twenty_five),
        Questions(repo_id=example_repo_id,question=question_twenty_six,answer=answer_twenty_six),
        Questions(repo_id=example_repo_id,question=question_twenty_seven,answer=answer_twenty_seven),
        Questions(repo_id=example_repo_id,question=question_twenty_eight,answer=answer_twenty_eight),
        Questions(repo_id=example_repo_id,question=question_twenty_nine,answer=answer_twenty_nine),
        Questions(repo_id=example_repo_id,question=question_thirty,answer=answer_thirty),
        Questions(repo_id=example_repo_id,question=question_thirty_one,answer=answer_thirty_one),
        Questions(repo_id=example_repo_id,question=question_thirty_two,answer=answer_thirty_two),
        Questions(repo_id=example_repo_id,question=question_thirty_three,answer=answer_thirty_three),
        Questions(repo_id=example_repo_id,question=question_thirty_four,answer=answer_thirty_four),
        Questions(repo_id=example_repo_id,question=question_thirty_five,answer=answer_thirty_five),
        Questions(repo_id=example_repo_id,question=question_thirty_six,answer=answer_thirty_six),
        Questions(repo_id=example_repo_id,question=question_thirty_seven,answer=answer_thirty_seven),
        Questions(repo_id=example_repo_id,question=question_thirty_eight,answer=answer_thirty_eight),
        Questions(repo_id=example_repo_id,question=question_thirty_nine,answer=answer_thirty_nine),
        Questions(repo_id=example_repo_id,question=question_forty,answer=answer_forty),
        Questions(repo_id=example_repo_two_id,question=question_forty_one,answer=answer_forty_one),
        Questions(repo_id=example_repo_two_id,question=question_forty_two,answer=answer_forty_two),
        Questions(repo_id=example_repo_two_id,question=question_forty_three,answer=answer_forty_three),
        Questions(repo_id=example_repo_two_id,question=question_forty_four,answer=answer_forty_four),
        Questions(repo_id=example_repo_two_id,question=question_forty_five,answer=answer_forty_five),
        Questions(repo_id=example_repo_two_id,question=question_forty_six,answer=answer_forty_six),
        Questions(repo_id=example_repo_two_id,question=question_forty_seven,answer=answer_forty_seven),
        Questions(repo_id=example_repo_two_id,question=question_forty_eight,answer=answer_forty_eight),
        Questions(repo_id=example_repo_two_id,question=question_forty_nine,answer=answer_forty_nine),
        Questions(repo_id=example_repo_two_id,question=question_fifty,answer=answer_fifty),
        Questions(repo_id=example_repo_two_id,question=question_fifty_one,answer=answer_fifty_one),
        Questions(repo_id=example_repo_two_id,question=question_fifty_two,answer=answer_fifty_two),
        Questions(repo_id=example_repo_two_id,question=question_fifty_three,answer=answer_fifty_three),
        Questions(repo_id=example_repo_two_id,question=question_fifty_four,answer=answer_fifty_four),
        Questions(repo_id=example_repo_two_id,question=question_fifty_five,answer=answer_fifty_five),
        Questions(repo_id=example_repo_two_id,question=question_fifty_six,answer=answer_fifty_six),
        Questions(repo_id=example_repo_two_id,question=question_fifty_seven,answer=answer_fifty_seven),
        Questions(repo_id=example_repo_two_id,question=question_fifty_eight,answer=answer_fifty_eight),
        Questions(repo_id=example_repo_two_id,question=question_fifty_nine,answer=answer_fifty_nine),
        Questions(repo_id=example_repo_two_id,question=question_sixty,answer=answer_sixty),
        Questions(repo_id=example_repo_two_id,question=question_sixty_one,answer=answer_sixty_one),
        Questions(repo_id=example_repo_two_id,question=question_sixty_two,answer=answer_sixty_two),
        Questions(repo_id=example_repo_two_id,question=question_sixty_three,answer=answer_sixty_three),
        Questions(repo_id=example_repo_two_id,question=question_sixty_four,answer=answer_sixty_four),
        Questions(repo_id=example_repo_two_id,question=question_sixty_five,answer=answer_sixty_five),
        Questions(repo_id=example_repo_two_id,question=question_sixty_six,answer=answer_sixty_six),
        Questions(repo_id=example_repo_two_id,question=question_sixty_seven,answer=answer_sixty_seven),
        Questions(repo_id=example_repo_two_id,question=question_sixty_eight,answer=answer_sixty_eight),
        Questions(repo_id=example_repo_two_id,question=question_sixty_nine,answer=answer_sixty_nine),
        Questions(repo_id=example_repo_two_id,question=question_seventy,answer=answer_seventy),
        Questions(repo_id=example_repo_two_id,question=question_seventy_one,answer=answer_seventy_one),
        Questions(repo_id=example_repo_two_id,question=question_seventy_two,answer=answer_seventy_two),
        Questions(repo_id=example_repo_two_id,question=question_seventy_three,answer=answer_seventy_three),
        Questions(repo_id=example_repo_two_id,question=question_seventy_four,answer=answer_seventy_four),
        Questions(repo_id=example_repo_two_id,question=question_seventy_five,answer=answer_seventy_five),
        Questions(repo_id=example_repo_two_id,question=question_seventy_six,answer=answer_seventy_six),
        Questions(repo_id=example_repo_two_id,question=question_seventy_seven,answer=answer_seventy_seven),
        Questions(repo_id=example_repo_two_id,question=question_seventy_eight,answer=answer_seventy_eight),
        Questions(repo_id=example_repo_two_id,question=question_seventy_nine,answer=answer_seventy_nine),
        Questions(repo_id=example_repo_two_id,question=question_eighty,answer=answer_eighty),
        Questions(repo_id=example_repo_two_id,question=question_eighty_one,answer=answer_eighty_one),
        Questions(repo_id=example_repo_two_id,question=question_eighty_two,answer=answer_eighty_two),
        Questions(repo_id=example_repo_two_id,question=question_eighty_three,answer=answer_eighty_three),
        Questions(repo_id=example_repo_id,question=question_eighty_four,answer=answer_eighty_four),
        Questions(repo_id=example_repo_id,question=question_eighty_five,answer=answer_eighty_five),
        Questions(repo_id=example_repo_id,question=question_eighty_six,answer=answer_eighty_six),
        Questions(repo_id=example_repo_id,question=question_eighty_seven,answer=answer_eighty_seven),
        Questions(repo_id=example_repo_id,question=question_eighty_eight,answer=answer_eighty_eight)
    ]
    db.session.add_all(seed_list)
    db.session.commit()

        