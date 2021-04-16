from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, QuestionsRepo

search_routes = Blueprint('search', __name__)

# Gets All the events
@search_routes.route('/')
@login_required
def Events():
    x = db.session.query(QuestionsRepo.id,QuestionsRepo.name).all()
    print(x)
    keys = ['id', 'name']
    search = {"search": [dict(zip(keys,values)) for values in x]}
    return search
