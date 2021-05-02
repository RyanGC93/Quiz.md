# Python Examples
from app.models import db, Questions

example_repo_id = 2

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

# ! Markdown Examples
def seed_example_two_questions():
    seed_list = [
        Questions( repo_id=example_repo_id, question=question_one, answer=answer_one),
        Questions( repo_id=example_repo_id, question=question_two, answer=answer_two),
        Questions( repo_id=example_repo_id, question=question_three, answer=answer_three),
        Questions( repo_id=example_repo_id, question=question_four, answer=answer_four),
        Questions( repo_id=example_repo_id, question=question_five, answer=answer_five),
        Questions( repo_id=example_repo_id, question=question_six, answer=answer_six),
        Questions( repo_id=example_repo_id, question=question_seven, answer=answer_seven),
        Questions( repo_id=example_repo_id, question=question_eight, answer=answer_eight),
        Questions( repo_id=example_repo_id, question=question_nine, answer=answer_nine),
        Questions( repo_id=example_repo_id, question=question_ten, answer=answer_ten),
        Questions( repo_id=example_repo_id, question=question_eleven, answer=answer_eleven),
        Questions( repo_id=example_repo_id, question=question_twelve, answer=answer_twelve),
        Questions( repo_id=example_repo_id, question=question_thirteen, answer=answer_thirteen),
        Questions( repo_id=example_repo_id, question=question_fourteen, answer=answer_fourteen),
    ]
    db.session.add_all(seed_list)
    db.session.commit()

        