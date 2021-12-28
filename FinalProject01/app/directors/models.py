from marshmallow import fields

from app import db, ma


class Director(db.Model):
	id = db.Column(db.Integer, primary_key=True, autoincrement=True)
	name = db.Column(db.Text, nullable=False)
	gender = db.Column(db.Integer, nullable=False)
	uid = db.Column(db.Integer, nullable=False, unique=True)
	department = db.Column(db.Text, default="Directing")

	movies = db.relationship(
		"Movie",
		backref='director',
		lazy='joined',
		cascade='all, delete, delete-orphan'
	)

	__tablename__ = "directors"


class DMovieSchema(ma.SQLAlchemyAutoSchema):
	class Meta:
		from app.movies.models import Movie
		model = Movie
		load_instance = True
		include_fk = True


class DirectorMoviesSchema(ma.SQLAlchemyAutoSchema):
	class Meta:
		model = Director
		load_instance = True
		sqla_session = db.session

	movies = fields.Nested("DMovieSchema", default=None, many=True)
	id = fields.Int(dump_only=True)


class DirectorSchema(ma.SQLAlchemyAutoSchema):
	class Meta:
		model = Director
		load_instance = True
		sqla_session = db.session

	id = fields.Int(dump_only=True)
