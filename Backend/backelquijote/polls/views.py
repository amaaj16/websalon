from django.shortcuts import render
from django.http import HttpResponse, HttpRequest
from pymongo import MongoClient
# Create your views here.


def index(request):
	client =MongoClient('localhost',27017)
	db = client.local_db
	tets = db.users

	user = {
	"name":"admin",
	"pass":"pass"
	}

	tets.instert_one(user)
	return HttpResponse("user_id")
