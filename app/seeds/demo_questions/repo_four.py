# Javascript Array Methods
from app.models import db, Questions

example_repo_id = 4

question_one='''```js
dogs.join(' * ');
```'''
question_two='''```js
dogs.pop();
```'''
question_three='''```js
dogs.push('Chihuahua');
```'''
question_four='''```js
dogs[dogs.length] = 'Chihuahua';
```'''
question_five='''```js
dogs.shift();
```'''
question_six='''```js
dogs.unshift('Chihuahua');
```'''
question_seven='''```js
delete dogs[0];
```'''
question_eight='''```js
dogs.splice(2, 0, 'Pug', 'Boxer');
```'''
question_nine='''```js
var animals = dogs.concat(cats,birds);
```'''
question_ten='''```js
dogs.slice(1,4);
```'''
question_eleven='''```js
dogs.sort();
```'''
question_twelve='''```js
dogs.reverse();
```'''
question_thirteen='''```js
x.sort(function(a, b){return a - b});
```'''
question_fourteen='''```js
x.sort(function(a, b){return b - a});
```'''
question_fifteen='''```js
highest = x[0];
```'''
question_sixteen='''```js
x.sort(function(a, b){return 0.5 - Math.random()});
```'''
answer_one='''// convert to string: results "Bulldog,Beagle,Labrador"'''
answer_two='''// join: "Bulldog * Beagle * Labrador"'''
answer_three='''// remove last element'''
answer_four='''// add new element to the end'''
answer_five='''// the same as push'''
answer_six='''// remove first element'''
answer_seven='''// add new element to the beginning'''
answer_eight='''// change element to undefined (not recommended)'''
answer_nine='''// add elements (where, how many to remove, element list)'''
answer_ten='''// join two arrays (dogs followed by cats and birds)'''
answer_eleven='''// elements from [1] to [4-1]'''
answer_twelve='''// sort string alphabetically'''
answer_thirteen='''// sort string in descending order'''
answer_fourteen='''// numeric sort'''
answer_fifteen='''// numeric descending sort'''
answer_sixteen='''// first item in sorted array is the lowest (or highest) value'''

# ! Markdown Examples
def seed_example_four_questions():
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
    ]
    db.session.add_all(seed_list)
    db.session.commit()

        