from django.urls import path

from hotel import views

urlpatterns = [
    path('get-all-hotel', views.get_all_hotel)
]
