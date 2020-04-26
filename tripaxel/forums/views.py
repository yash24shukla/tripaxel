from django.shortcuts import render
from .models import Forum
from .serializer import ForumSerializer
from django.http import JsonResponse
from rest_framework.decorators import api_view 
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
# Create your views here.
@api_view(['GET'])
def QList(request):
    Ques = Forum.objects.all().order_by('-id')
    serializer = ForumSerializer(Ques, many=True)
    
    return Response(serializer.data)
@api_view(['GET'])
def Qdetails(request,pk):
    Ques = Forum.objects.get(id=pk)
    serializer = ForumSerializer(Ques, many=False)
    return Response(serializer.data)


@api_view(['POST'])

def Qcreate(request):
    serializer =  ForumSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def Qupdate(request, pk):
    task = Forum.objects.get(id=pk)
    serializer = ForumSerializer(instance=task, data=request.data)

    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['DELETE'])
def Qdelete(request, pk):
    task =  Forum.objects.get(id=pk)
    task.delete()

    return Response('item succesfully deleted')

