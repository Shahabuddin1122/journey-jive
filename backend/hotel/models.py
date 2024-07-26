from django.db import models


# Create your models here.
class Hotel(models.Model):
    name = models.TextField()
    short_description = models.TextField()
    guest_per_room = models.IntegerField()
    bed_per_room = models.IntegerField()
    washroom_per_room = models.IntegerField()
    price_per_room = models.IntegerField()
    about = models.TextField()
    additional_info = models.TextField()
    check_in = models.TextField()
    check_out = models.TextField()
    total_rooms = models.IntegerField()


class HotelImage(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)
    heroImage = models.TextField()
    additionalImage = models.TextField()

