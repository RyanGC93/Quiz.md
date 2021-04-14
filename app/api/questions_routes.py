from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import QuestionsRepo, Questions

questions_routes = Blueprint('questions', __name__)

# Gets all questions to a repo
@questions_routes.route('/<int:repoId>')
@login_required
def questions(repoId):
    questions = Questions.query.filter(Questions.repo_id == repoId).all()
    resObj = {"questions": [question.to_dict() for question in questions]}
    return resObj if resObj else {"questions": []} 
    return resObj