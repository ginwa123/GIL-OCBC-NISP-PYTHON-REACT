from marshmallow import fields

from app import db, ma


class Movie(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	original_title = db.Column(db.Text, nullable=True)
	budget = db.Column(db.Integer, nullable=True)
	popularity = db.Column(db.Integer, nullable=True)
	release_date = db.Column(db.Date, nullable=True)
	revenue = db.Column(db.Integer, nullable=True)
	title = db.Column(db.Text, nullable=True)
	vote_average = db.Column(db.REAL, nullable=True)
	vote_count = db.Column(db.Integer, nullable=True)
	overview = db.Column(db.Text, nullable=True)
	tagline = db.Column(db.Text, nullable=True)
	uid = db.Column(db.Integer, nullable=True, unique=True)
	director_id = db.Column(db.Integer, db.ForeignKey('directors.id'))

	__tablename__ = "movies"


class DirectorrSchema(ma.SQLAlchemyAutoSchema):
	class Meta:
		from app.directors.models import Director
		model = Director
	# fields =("id", "name",)


class MovieSchema(ma.SQLAlchemyAutoSchema):
	# def __init__(self, **kwargs):
	# 	super().__init__(**kwargs)
	class Meta:
		model = Movie
		load_instance = True
	# include_fk = True
	# include_relationship = True

	director = ma.Nested("DirectorSchema", default=None)
