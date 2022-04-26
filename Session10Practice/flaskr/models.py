from . import db, ma


class AvoType(db.Model):
	__tablename__ = "avotype"

	typeid = db.Column(db.Integer, primary_key=True)
	type = db.Column(db.String, unique=True)

	avocado = db.relationship(
		'Avocado',
		backref='AvoRegion',
		cascade='all, delete, delete-orphan',
		single_parent=True,
	)


class AvoRegion(db.Model):
	__tablename__ = "avoregion"

	regionid = db.Column(db.Integer, primary_key=True)
	region = db.Column(db.String, unique=True)

	avocado = db.relationship(
		'Avocado',
		backref='AvoRegion',
		cascade='all, delete, delete-orphan',
		single_parent=True,
	)


class Avocado(db.Model):
	__tablename__ = "avocado"
	date = db.Column(db.DateTime, )
	avgprice = db.Column(db.Float, )
	avo_a = db.Column(db.Float, )
	av0_b = db.Column(db.Float, )
	avo_c = db.Column(db.Float, )

	type = db.Column(db.Integer, db.ForeignKey("avotype.typeid"))
	region = db.Column(db.Integer, db.ForeignKey("avocado.regionid"))


class AvoTypeSchema(ma.SQLAlchemyAutoSchema):
	def __init__(self, **kwargs):
		super().__init__(**kwargs)

	class Meta:
		model = AvoType
		sqla_session = db.session
		load_instance = True
