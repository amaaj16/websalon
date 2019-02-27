from django.shortcuts import render
from django.http import HttpResponse, HttpRequest,JsonResponse
# Create your views here.
def galeria(request):

    user = {
	"name":"admin",
	"pass":"pass"
	}

    return JsonResponse(user)
