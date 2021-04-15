from .db import db

class QuestionsRepo(db.Model):
    __tablename__ = 'questions_repo'
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String(250), nullable=False)
    # type = db.Column(db.String(250), nullable=False)
    # subcategory = db.Column(db.String(250), nullable=False)

    user = db.relationship('User', back_populates='questions_repo')
    
    questions = db.relationship('Questions', back_populates='questions_repo') 

    def to_dict(self):
        return {
            "repo_id": self.id,
            "owner_id" : self.owner_id,
            "name" : self.name,
        }