from app.models import db, Questions
from faker import Faker
fake = Faker()


question_one ='''```js
let this = []
```''' 


# ! Seeds with lorem for quick build
def seed_questions():
    seed_list = []
    for _ in range(100):
        seed = Questions( repo_id=fake.random_int(min=1, max=10, step=1), question=fake.sentence(), answer=fake.paragraph())
        seed_list.append(seed)
        
        db.session.add_all(seed_list)
        db.session.commit()
    seed= Questions( repo_id=fake.random_int(min=1, max=10, step=1), question=question_one, answer=fake.paragraph())
    db.session.add(seed)
    db.session.commit()    
        
def undo_questions():
    db.session.execute('TRUNCATE questions CASCADE;')
    db.session.commit()
        