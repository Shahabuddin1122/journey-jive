import http

from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from hotel.models import Hotel
from hotel.serializers import HotelSerializer


@api_view(['GET'])
def get_all_hotel(request):
    hotels = Hotel.objects.all()
    if hotels:
        serializer = HotelSerializer(hotels)
        return Response(serializer.data, http.HTTPStatus.OK)
    return Response("Failed to get data", http.HTTPStatus.INTERNAL_SERVER_ERROR)