from .db import db

class Questions(db.Model):
    __tablename__ = 'questions'
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.Text, nullable=False)
    answer = db.Column(db.Text, nullable=False)
    subcategory = db.Column(db.String(250), nullable=False)

    # question = db.relationship('QuestionsRepo', back_populates='question')


    def to_dict(self):
        return {
            "question_id": self.id,
            "question" : self.question,
            "answer" : self.answer,
            "subcategory" : self.subcategory,
            
        }