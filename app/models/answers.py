from .db import db

class Answers(db.Model):
    __tablename__ = 'answer'
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(250), nullable=False)
    type = db.Column(db.String(250), nullable=False)
    subcategory = db.Column(db.String(250), nullable=False)
