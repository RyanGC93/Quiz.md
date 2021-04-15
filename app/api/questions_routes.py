from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, QuestionsRepo, Questions

questions_routes = Blueprint('questions', __name__)

# Gets all questions to a repo
@questions_routes.route('/<int:repoId>')
@login_required
def questions(repoId):
    questions = Questions.query.filter(Questions.repo_id == repoId).all()
    resObj = {"questions": [question.to_dict() for question in questions]}
    return resObj if resObj else {"questions": []} 
    return resObj


@questions_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_question(id):
    question = Questions.query.get(id)
    print('''
          ===========================================
          ''')
    print(question)
    
    db.session.delete(question)
    db.session.commit()
    return 'Post Deleted'
