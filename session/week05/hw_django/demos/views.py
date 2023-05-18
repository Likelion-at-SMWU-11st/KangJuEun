from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def helloBabyLion(request):
   # return HttpResponse('참여하고싶은 스터디는?!')
    return render(request,'jooDjango.html')