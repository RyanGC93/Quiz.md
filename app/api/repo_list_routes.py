from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required

from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, QuestionsRepo

repo_list_routes = Blueprint('repoList', __name__)

@repo_list_routes.route('/<int:ownerId>')
@login_required
def repo(ownerId):
    repoList = QuestionsRepo.query.filter(QuestionsRepo.owner_id == ownerId).all()
    resObj = {"repoList": [repo.to_dict() for repo in repoList]}
    return resObj if resObj else {"questions": []} 
    return resObj
