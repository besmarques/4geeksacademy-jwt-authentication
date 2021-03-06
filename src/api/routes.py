"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from werkzeug.security import check_password_hash, generate_password_hash


api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/signup', methods=['Post'])
def create_user():
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    password_hash = generate_password_hash(password)

    user = User(
        email = email,
        password = password_hash,
        is_active = False
    )

    user.create()

    return jsonify(user.serialize())
    

@api.route('/login', methods=['POST'])
def login():
    email = request.json.get('email', None)
    password = request.json.get('password', None)

    user = User.get_by_email(email)

    if user and check_password_hash(user.password, password):
        token = create_access_token(identity=email)
        return {"token": token}
    else:
        return {"error":"user and password not valid"},400


@api.route("/private", methods=["GET"])
@jwt_required()
def protected():
    #Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200