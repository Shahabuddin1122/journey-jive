import http

from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from user.models import *
from user.serializers import UserSerializer


# Create your views here.
@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        email = request.data['email']
        password = request.data['password']

        if not email or not password:
            return Response('Email and password are required', status=status.HTTP_400_BAD_REQUEST)

        u = User.objects.create(email=email, password=password)
        serializer = UserSerializer(u)
        return Response(serializer.data, http.HTTPStatus.CREATED)

    return Response('Error to add user', http.HTTPStatus.BAD_REQUEST)


@api_view(['POST'])
def login(request):
    if request.method == 'POST':
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user = User.objects.get(email=email, password=password)
            serializer = UserSerializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response("Login failed", status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response(str(e), status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    return Response('Error to login', status=status.HTTP_400_BAD_REQUEST)
