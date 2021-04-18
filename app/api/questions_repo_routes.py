from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from sqlalchemy import exc
from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import db, QuestionsRepo, Questions


questions_repo_routes = Blueprint('repo', __name__)

# Gets the repo
@questions_repo_routes.route('/<int:ownerId>')
@login_required
def repo(ownerId):
    repoList = QuestionsRepo.query.filter(QuestionsRepo.owner_id == ownerId).all()
    resObj = {"repos": [repo.to_dict() for repo in repoList]}
    return resObj if resObj else {"repos": []} 
    


# Edit question
@questions_repo_routes.route('/<int:id>', methods=['PUT'])
@login_required
def edit_repo(id):
    
    data = request.get_json()
    edit_repo = QuestionsRepo.query.get(id)
    edit_repo.name = data['name']
    db.session.commit()
    return edit_repo.to_dict()



# CREATE REPO
@questions_repo_routes.route('/', methods=['POST'])
def new_question():
    if current_user.is_authenticated:
        data = request.get_json()
        title = data['title']
        owner_id = current_user.id
        try:
            new_repo = QuestionsRepo(owner_id=owner_id, name=title
                        )
            db.session.add(new_repo)
            db.session.commit()
            return(new_repo.to_dict())
        except exc.SQLAlchemyError as e:
            print('hit error')
            print(type(e))
            return {'errors': ['Cannot Create Repo Please Try again']}, 500
        

# DELETE
@questions_repo_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_question(id):
    repo = QuestionsRepo.query.filter(id == QuestionsRepo.id).first()
    
    db.session.delete(repo)
    db.session.commit()
    return 'Post Deleted'
