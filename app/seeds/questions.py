from app.models import db, Questions
from faker import Faker
fake = Faker()


# ! Seeds with lorem for quick build
def seed_questions():
    seed_list = []
    count = 0 
    for _ in range(10):
        seed = Questions( owner_id=1, name=fake.word(), type=fake.word(), subcategory=fake.word())
        count +=1
        seed_list.append(seed)
        
        db.session.add_all(seed_list)
        db.session.commit()
        
def undo_questions():
    db.session.execute('TRUNCATE questions CASCADE;')
    db.session.commit()
        