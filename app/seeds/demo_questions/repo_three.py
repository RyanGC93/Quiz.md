# First Demo Repo That Holds Markdown Examples
from app.models import db, Questions

example_repo_id = 2

question_one =''' ''' 
answer_one ='''
''' 

question_two =''' ''' 
answer_two ='''
''' 

question_three =''' ''' 
answer_three =''' ''' 

question_four =''' ''' 
answer_four =''' ''' 


question_five=''' ''' 
answer_five='''
''' 
question_six ='''
''' 
answer_six ='''
''' 
question_seven =''' ''' 
answer_seven =''' ''' 

question_eight =''' ''' 
answer_eight ='''
 ''' 

question_nine ='''
''' 
answer_nine =''' '''

question_ten =''' ''' 
answer_ten =''' ''' 

question_eleven ='''''' 
answer_eleven ='''
''' 

question_twelve ='''''' 
answer_twelve =''' ''' 

question_thirteen =''' ''' 
answer_thirteen ='''
''' 

question_fourteen =''' ''' 
answer_fourteen =''' ''' 

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
        Questions( repo_id=example_repo_id, question=question_eleven, answer=answer_eleven),
        Questions( repo_id=example_repo_id, question=question_twelve, answer=answer_twelve),
        Questions( repo_id=example_repo_id, question=question_thirteen, answer=answer_thirteen),
        Questions( repo_id=example_repo_id, question=question_fourteen, answer=answer_fourteen),
    ]
    db.session.add_all(seed_list)
    db.session.commit()

        