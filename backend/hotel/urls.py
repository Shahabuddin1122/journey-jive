from django.urls import path

from hotel import views

urlpatterns = [
    path('get-all-hotel', views.get_all_hotel),
    path('add-hotel', views.add_hotel),
    path('get-indivisual-hotel/<int:hotel_id>', views.get_individual_hotel)
]
