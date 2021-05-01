# First Demo Repo That Holds Markdown Examples
from app.models import db, Questions
from faker import Faker
fake = Faker()

example_repo_id = 1


question_one ='''```js
let this = []
let this = []
let this = []
```''' 

question_two ='''```js
let this = []
let this = []
let this = []
```''' 

question_three ='''```js
let this = []
let this = []
let this = []
```''' 
question_four ='''```js
let this = []
let this = []
let this = []
```''' 
question_five='''```js
let this = []
let this = []
let this = []
```''' 
question_six ='''```js
let this = []
let this = []
let this = []
```''' 
question_seven ='''```js
let this = []
let this = []
let this = []
```''' 
question_eight ='''```js
let this = []
let this = []
let this = []
```''' 
question_nine ='''```js
let this = []
let this = []
let this = []
```''' 
question_ten ='''```js
let this = []
let this = []
let this = []
```''' 


answer_one ='''```js
let this = []
let this = []
let this = []
```''' 

answer_two ='''```js
let this = []
let this = []
let this = []
```''' 

answer_three ='''```js
let this = []
let this = []
let this = []
```''' 
answer_four ='''```js
let this = []
let this = []
let this = []
```''' 
answer_five='''```js
let this = []
let this = []
let this = []
```''' 
answer_six ='''```js
let this = []
let this = []
let this = []
```''' 
answer_seven ='''```js
let this = []
let this = []
let this = []
```''' 
answer_eight ='''```js
let this = []
let this = []
let this = []
```''' 
answer_nine ='''```js
let this = []
let this = []
let this = []
```''' 
answer_ten ='''```js
let this = []
let this = []
let this = []
```''' 

# ! Markdown Examples
def seed_example_one_questions():
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
    ]
    db.session.add_all(seed_list)
    db.session.commit()
    seed= Questions( repo_id=fake.random_int(min=1, max=10, step=1), question=question_one, answer=fake.paragraph())
    db.session.add(seed)
    db.session.commit()    
        