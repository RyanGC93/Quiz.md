from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import QuestionsRepo, Questions

questions_routes = Blueprint('questions', __name__)

@questions_routes.route('/')
@login_required
def questions():
    questions = Questions.query.all()
    return {"Questions": [question.to_dict() for question in questions]}