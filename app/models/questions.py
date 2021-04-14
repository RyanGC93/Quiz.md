from .db import db

class Questions(db.Model):
    __tablename__ = 'questions'
    id = db.Column(db.Integer, primary_key=True)
    repo_id = db.Column(db.Integer, db.ForeignKey("questions_repo.id"), nullable=False)
    question = db.Column(db.Text, nullable=False)
    answer = db.Column(db.Text, nullable=False)


    questions_repo = db.relationship('QuestionsRepo', back_populates='questions')

    def to_dict(self):
        return {
            "question_id": self.id,
            "question" : self.question,
            "answer" : self.answer,
            "subcategory" : self.subcategory, 
        }