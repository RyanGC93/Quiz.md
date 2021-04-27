from app.models import db, QuestionsRepo
from faker import Faker
fake = Faker()


# ! Seeds with lorem for quick build to test
# def seed_questions_repo():
#     seed_list = []
#     count = 1 
#     for _ in range(10):
#         seed = QuestionsRepo(id=count, owner_id=1, name=fake.word(), type=fake.word(), subcategory=fake.word())
#         count +=1
#         seed_list.append(seed)
        
#         db.session.add_all(seed_list)
#         db.session.commit()

# ! Seed with the examples
def seed_questions_repo():
    
    seedOne = QuestionsRepo(id=1, owner_id=1, name='Python', type=fake.word(), subcategory=fake.word())
    seedTwo = QuestionsRepo(id=2, owner_id=1, name='Md Example', type=fake.word(), subcategory=fake.word())
    seedThree = QuestionsRepo(id=3, owner_id=1, name='Javascript', type=fake.word(), subcategory=fake.word())
    seedFour = QuestionsRepo(id=4, owner_id=1, name='More Ex 1', type=fake.word(), subcategory=fake.word())
    seedFive = QuestionsRepo(id=5, owner_id=1, name='More Ex 2', type=fake.word(), subcategory=fake.word())
    seedSix = QuestionsRepo(id=6, owner_id=1, name='More Ex 3', type=fake.word(), subcategory=fake.word())
   
    seed_list = [seedOne,seedTwo,seedThree,seedFour,seedFive,seedSix]
    db.session.add_all(seed_list)
    db.session.commit()
    
def undo_questions_repo():
    db.session.execute('TRUNCATE questions_repo CASCADE;')
    db.session.commit()
        