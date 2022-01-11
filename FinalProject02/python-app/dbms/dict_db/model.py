#################### Database CRUD Implementation ######################
from main import db, ma


class Model(db.Model):
    key = db.Column(db.String, primary_key=True)
    firstName = db.Column(db.String(255))
    lastName = db.Column(db.String(255))


    ############################ create item ###########################
    def create(self, key, value):
        new_user = Model(key=key, firstName=value["firstName"], lastName=value["lastName"])
        # key = "1"
          # value = {"firstName": "John, "lastName": "Doe"}
        # return = True
        #          False
        isUserExist = Model.query.filter(Model.key == key).one_or_none()
        if isUserExist:
            return False
        # invalid value
        try:
            if (len(value["firstName"]) == 0
                    and len(value["lastName"]) == 0):
                return False
        except KeyError:
            return False
        # succeed
        db.session.add(new_user)
        db.session.commit()
        return True


    ############################ read item ###########################
    def read(self, key):
        user = Model.query.filter(Model.key == key).one_or_none()
        # key = "1"
        # reutrn value = {"firstName": "John", "lastName": "Doe"}
        #                None
        if user:
            return user
        else:
            return None


    ############################ update item ###########################
    def update(self, key, value):
        # key = "1"
        # value = {"firstName": "John", "lastName": "Doe"}
        # return = True
        #          False
        # invalid value
        try:
            if (len(value["firstName"]) == 0
                    and len(value["lastName"]) == 0):
                return False
            # not found
            isUserExist = Model.query.filter(Model.key == key).one_or_none()
            if not isUserExist:
                return False
        # invalid value
        except KeyError:
            print("key error")
            return False
        # succeed
        updated_user = Model(key=key, firstName=value["firstName"], lastName=value["lastName"])
        db.session.merge(updated_user)
        db.session.commit()
        # self.database[key] = value
        return True


    ############################ delete item ###########################
    def delete(self, key):
        # key = "1"
        # return = True 
        #          False
        isUserExist = Model.query.filter(Model.key == key).one_or_none()
        if not isUserExist:
            return False
        # succeed
        # del self.database[key]
        db.session.delete(isUserExist)
        db.session.commit()
        return True


    ############################ debug method ###########################
    def debug(self):
        users = Model.query.all()
        # return = database if implemented
        #          None if not implemented
        return users


class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Model
        load_instance = True