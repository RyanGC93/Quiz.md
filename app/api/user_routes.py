from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User
from sqlalchemy import exc


user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    try:    
        users = User.query.all()
        return {"users": [user.to_dict() for user in users]}
    except exc.SQLAlchemyError as e:
        print(type(e))
        return {'errors': ['Cannot Get Users Please Try again']}, 500

@user_routes.route('/<int:id>')
@login_required
def user(id):
    try:
        user = User.query.get(id)
        return user.to_dict()
    except exc.SQLAlchemyError as e:
        print(type(e))
        return {'errors': ['Cannot Get User Please Try again']}, 500