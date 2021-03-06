from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, QuestionsRepo
from sqlalchemy import exc


search_routes = Blueprint('search', __name__)

# Gets All the events
@search_routes.route('/')
@login_required
def Events():
    try:
        x = db.session.query(QuestionsRepo.id,QuestionsRepo.name).all()
        keys = ['id', 'name']
        search = {"search": [dict(zip(keys,values)) for values in x]}
        return search
    except exc.SQLAlchemyError as e:
        print(type(e))
        return {'errors': ['Cannot Get Searched Repos Please Try again']}, 500
