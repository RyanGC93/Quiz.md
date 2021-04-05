from db import db

class QuestionsRepo(db.Model):
    __tablename__ = 'questions_repo'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    type = db.Column(db.String(250), nullable=False)
    subcategory = db.Column(db.String(250), nullable=False)