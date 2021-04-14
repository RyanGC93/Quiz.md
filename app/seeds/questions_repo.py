from app.models import db, QuestionsRepo
from faker import Faker
fake = Faker()


# ! Seeds with lorem for quick build
def seed_questions_repo():
    seed_list = []
    count = 0 
    for _ in range(10):
        seed = QuestionsRepo(id=count, owner_id=1, name=fake.word(), type=fake.word(), subcategory=fake.word())
        count +=1
        seed_list.append(seed)
        
        db.session.add_all(seed_list)
        db.session.commit()
        
def undo_questions_repo():
    db.session.execute('TRUNCATE questions_repo CASCADE;')
    db.session.commit()
        