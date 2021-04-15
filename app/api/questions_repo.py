from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required

from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, QuestionsRepo, Questions

repo_routes = Blueprint('repo', __name__)

# Gets all repo to a repo
@repo_routes.route('/<int:repoId>')
@login_required
def repo(repoId):
    repo = QuestionsRepo.query.get(id)
    respObj = 
    return resObj if resObj else {"repo": []} 
    return resObj


# Edit question
@repo_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_repo(id):
    
    data = request.get_json()
    print('''
          ===========================================
          ''')
    print(data,id)
    print('''
          ===========================================
          ''')
    print(id)
    edit_question = Questions.query.get(id)
    edit_question.question = data['question']
    edit_question.answer = data['answer']
    db.session.commit()
    return edit_question.to_dict()



# CREATE QUESTION
@repo_routes.route('/', methods=['POST'])
def new_question():
    if current_user.is_authenticated:
        print(current_user.id)
        print('''
            ===========================================^^ current user
            ''')
    
        data = request.get_json()
        answer = data['answer']
        question = data['question']
        repo_id = data['repoId']
        owner_id = current_user.id
        new_post = Questions(question=question, answer=answer,
                        repo_id=repo_id)
        db.session.add(new_post)
        db.session.commit()
        return(new_post.to_dict())


# DELETE
@repo_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_question(id):
    question = Questions.query.get(id)

    
    db.session.delete(question)
    db.session.commit()
    return 'Post Deleted'
