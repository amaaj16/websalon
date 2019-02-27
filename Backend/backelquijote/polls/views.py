from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from pymongo import MongoClient
# Create your views here.

client = MongoClient("mongodb+srv://amaaj16:amaaj16@cluster0-s1gai.mongodb.net/test?retryWrites=true")
db = client.elquijote_db
collection = db.users
def index(request):


	user = {
	"name":"admin",
	"pass":"pass"
	}

	id_user = collection.insert_one(user).inserted_id
	return HttpResponse("user_id")
