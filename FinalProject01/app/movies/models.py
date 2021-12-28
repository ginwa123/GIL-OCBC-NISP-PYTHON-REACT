from app import db, ma


class Movie(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	original_title = db.Column(db.Text, nullable=True)
	budget = db.Column(db.BigInteger, nullable=True)
	popularity = db.Column(db.BigInteger, nullable=True)
	release_date = db.Column(db.Date, nullable=True)
	revenue = db.Column(db.BigInteger, nullable=True)
	title = db.Column(db.Text, nullable=True)
	vote_average = db.Column(db.REAL, nullable=True)
	vote_count = db.Column(db.BigInteger, nullable=True)
	overview = db.Column(db.Text, nullable=True)
	tagline = db.Column(db.Text, nullable=True)
	uid = db.Column(db.BigInteger, nullable=True, unique=True)
	director_id = db.Column(db.BigInteger, db.ForeignKey('directors.id'))

	__tablename__ = "movies"


class MovieSchema(ma.SQLAlchemyAutoSchema):
	class Meta:
		model = Movie
		load_instance = True

	director_id = ma.Int()
	director = ma.Nested("DirectorSchema", default=None, dump_only=True)
