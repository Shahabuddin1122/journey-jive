import base64
import http

from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from hotel.models import Hotel, HotelImage
from hotel.serializers import HotelSerializer
from hotel.utils import encode_image


@api_view(['GET'])
def get_all_hotel(request):
    hotels = Hotel.objects.all()
    if hotels:
        serializer = HotelSerializer(hotels,many=True)
        return Response(serializer.data, http.HTTPStatus.OK)
    return Response("Failed to get data", http.HTTPStatus.INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def add_hotel(request):
    if request.method == 'POST':
        data = request.data

        try:
            # Access the uploaded files
            hero_image_file = request.FILES['hero_image']
            additional_image_file = request.FILES['additional_image']
        except KeyError as e:
            return Response({'status': 'error', 'message': f'Missing key: {str(e)}'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # Read the content of the uploaded files as bytes and encode to base64
            hero_image_base64 = base64.b64encode(hero_image_file.read()).decode('utf-8')
            additional_image_base64 = base64.b64encode(additional_image_file.read()).decode('utf-8')
        except Exception as e:
            return Response({'status': 'error', 'message': f'Error reading files: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        try:
            hotel_image = HotelImage.objects.create(
                heroImage=hero_image_base64,
                additionalImage=additional_image_base64
            )
            print(hotel_image)

            hotel = Hotel.objects.create(
                name=data['name'],
                short_description=data['short_description'],
                guest_per_room=data['guest_per_room'],
                bed_per_room=data['bed_per_room'],
                washroom_per_room=data['washroom_per_room'],
                price_per_room=data['price_per_room'],
                about=data['about'],
                additional_info=data['additional_info'],
                check_in=data['check_in'],
                check_out=data['check_out'],
                total_rooms=data['total_rooms'],
                hotel_image=hotel_image
            )
            print(hotel)
            serializer = HotelSerializer(hotel)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({'status': 'error', 'message': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    return Response("Invalid request method", status=status.HTTP_405_METHOD_NOT_ALLOWED)