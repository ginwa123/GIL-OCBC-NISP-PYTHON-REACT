#   an simple flask backend

from flask import Flask, json, jsonify, request

##########################  API Implementation #########################
############################## create name #############################
from dbms.dict_db.model import UserSchema
from main import create_model


############################ Choose Models ############################
# from dbms.json_db.model import Model


def create_routes(app: Flask):
    @app.route('/keys', methods=["POST"])
    def create_name():
        model = create_model()
        data_json = request.data
        data_dict = json.loads(data_json)
        # bad request
        if "key" not in data_dict:
            return jsonify({"errorMsg": "bad request"}), 400
        if not (model.create(data_dict["key"], data_dict)):
            return jsonify({"errorMsg": "bad request"}), 400
        # succeed
        return jsonify(data_dict), 201

    ############################## read name ###############################
    @app.route('/keys/<key>', methods=["GET"])
    def read_name(key):
        model = create_model()
        value = model.read(key)
        # not found
        if (value is None):
            return jsonify({"key": key, "errorMsg": "not found"}), 404
        # succeed
        # value["key"] = key
        value = UserSchema().dump(value)
        return jsonify(value), 200

    ############################## update name #############################
    @app.route('/keys/<key>', methods=["PUT"])
    def update_name(key):
        model = create_model()
        value = json.loads(request.data)
        # bad request
        if (not model.update(key, value)):
            return jsonify({"key": key, "errorMsg": "bad request"}), 400
        # succeed
        value["key"] = key
        value = UserSchema().dump(value)
        return jsonify(value), 200

    ############################## delete name #############################
    @app.route('/keys/<key>', methods=["DELETE"])
    def delete_name(key):
        model = create_model()
        # not found
        value = model.read(key)
        if not value:
            return jsonify({"key": key, "errorMsg": "not found"}), 404
        # not found
        if (not model.delete(key)):
            return jsonify({"key": key, "errorMsg": "not found"}), 404
        # succeed
        # value["key"] = key
        value = UserSchema().dump(value)
        return jsonify(value), 200

    ############################# Debug Method #############################
    # print database
    @app.route('/debug', methods=["GET"])
    def print_database():
        model = create_model()
        database = model.debug()
        if (database is None):
            print("\n########### Debug Method Not Implemented #############")
            return jsonify({"errorMsg": "Debug Method Not Implemented"}), 200
        else:
            print("\n######################################################")
            print(database)
            database = UserSchema().dump(database, many=True, )
            context_list = {}
            for i in database:
                user = i
                print(user["key"])
                context = {
                    "firstName": user["firstName"],
                    "lastName": user["lastName"]
                }
                context_list[user["key"]] = context

            return jsonify(context_list), 200
