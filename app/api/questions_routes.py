from flask import Blueprint, jsonify, request
from sqlalchemy import exc
from flask_login import current_user, login_required
from app.models import db, Questions

questions_routes = Blueprint('questions', __name__)

# Gets all questions to a repo
@questions_routes.route('/<int:repoId>')
@login_required
def questions(repoId):
    try:
        questions = Questions.query.filter(Questions.repo_id == repoId).all()
        resObj = {"questions": [question.to_dict() for question in questions]}
        return resObj if resObj else {"questions": []} 
    except exc.SQLAlchemyError as e:
        print(type(e))
        return {'errors': ['Cannot Get Repos Questions Please Try again']}, 500


# Edit question
@questions_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_questions(id):
    try:
        data = request.get_json()
        edit_question = Questions.query.get(id)
        edit_question.question = data['question']
        edit_question.answer = data['answer']
        db.session.commit()
        return edit_question.to_dict()
    except exc.SQLAlchemyError as e:
        print(type(e))
        return {'errors': ['Cannot Edit Repos Questions Please Try again']}, 500


# CREATE QUESTION
@questions_routes.route('/', methods=['POST'])
def new_question():
    if current_user.is_authenticated:
        try:
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
        except exc.SQLAlchemyError as e:
            print(type(e))
            return {'Error': ['Cannot Create New Questions Please Try again']}, 500

# Deletes Question
@questions_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_question(id):
    try:
        question = Questions.query.get(id)   
        db.session.delete(question)
        db.session.commit()
        return 'Post Deleted'
    except exc.SQLAlchemyError as e:
        print(type(e))
        return {'errors': ['Cannot Delete Question Please Try again']}, 500    
