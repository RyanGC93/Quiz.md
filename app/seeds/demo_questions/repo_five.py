# Javascript Time Methods
from app.models import db, Questions

example_repo_id = 5
question_one='''```js
Date('2017');
```'''
question_two='''```js
Date('2017-06-23T12:00:00-09:45');
```'''
question_three='''```js
Date('June 23 2017');
```'''
question_four='''```js
Date('Jun 23 2017 07:45:00 GMT+0100 (Tokyo Time)');
```'''
question_five='''```js
a = d.getDay();
```'''
question_six='''```js
getDate();
```'''
question_seven='''```js
getDay();
```'''
question_eight='''```js
getFullYear();
```'''
question_nine='''```js
getHours();
```'''
question_ten='''```js
getMilliseconds();
```'''
question_eleven='''```js
getMinutes();
```'''
question_twelve='''```js
getMonth();
```'''
question_thirteen='''```js
getSeconds();
```'''
question_fourteen='''```js
getTime();
```'''
question_fifteen='''```js
d.setDate(d.getDate() + 7);
```'''
question_sixteen='''```js
setDate();
```'''
question_seventeen='''```js
setFullYear();
```'''
question_eighteen='''```js
setHours();
```'''
question_nineteen='''```js
setMilliseconds();
```'''
question_twenty='''```js
setMinutes();
```'''
question_twenty_one='''```js
setMonth();
```'''
question_twenty_two='''```js
setSeconds();
```'''
question_twenty_three='''```js
setTime();
```'''
answer_one='''// date declaration'''
answer_two='''// is set to Jan 01'''
answer_three='''// date - time YYYY-MM-DDTHH:MM:SSZ'''
answer_four='''// long date format'''
answer_five='''// time zone'''
answer_six='''// getting the weekday'''
answer_seven='''// day as a number (1-31)'''
answer_eight='''// weekday as a number (0-6)'''
answer_nine='''// four digit year (yyyy)'''
answer_ten='''// hour (0-23)'''
answer_eleven='''// milliseconds (0-999)'''
answer_twelve='''// minutes (0-59)'''
answer_thirteen='''// month (0-11)'''
answer_fourteen='''// seconds (0-59)'''
answer_fifteen='''// milliseconds since 1970'''
answer_sixteen='''// adds a week to a date'''
answer_seventeen='''// day as a number (1-31)'''
answer_eighteen='''// year (optionally month and day)'''
answer_nineteen='''// hour (0-23)'''
answer_twenty='''// milliseconds (0-999)'''
answer_twenty_one='''// minutes (0-59)'''
answer_twenty_two='''// month (0-11)'''
answer_twenty_three='''// seconds (0-59)'''

# ! Markdown Examples
def seed_example_five_questions():
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
    ]
    db.session.add_all(seed_list)
    db.session.commit()

        