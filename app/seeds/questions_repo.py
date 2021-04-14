from app.models import db, QuestionsRepo
from faker import faker
fake =Faker()

def seed_questions_repo():
    seed_list = []
    count = 0 
    for _ in range(10):
        seed = QuestionsRepo(id=count, name=fake.word(), type=fake.word(), subcategory=fake.word())
        count +=1
        seed_list.append(seed)
        
        db.session.add_all(seed_list)
        db.session.commit()