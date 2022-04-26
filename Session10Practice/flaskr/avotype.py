from .models import AvoType, AvoTypeSchema


def read_all():
	"""
	This function responds to a request for /api/people
	with the complete lists of people

	:return:        json string of list of people
	"""

	avo_type = AvoType.query \
		.order_by(AvoType.lname) \
		.all()

	# Serialize the data for the response

	avo_type_schema = AvoTypeSchema(many=True)
	return avo_type_schema.dump(avo_type)
