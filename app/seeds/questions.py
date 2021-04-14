from app.models import db, Questions
from faker import Faker
fake = Faker()


# ! Seeds with lorem for quick build
def seed_questions():
    seed_list = []
    for _ in range(10):
        seed = Questions( repo_id=fake.random_int(min=0, max=10, step=1), question=fake.sentence(), answer=fake.paragraph())
        seed_list.append(seed)
        
        db.session.add_all(seed_list)
        db.session.commit()
        
def undo_questions():
    db.session.execute('TRUNCATE questions CASCADE;')
    db.session.commit()
        