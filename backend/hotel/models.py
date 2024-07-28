from django.db import models


# Create your models here.
class HotelImage(models.Model):
    heroImage = models.TextField()
    additionalImage = models.TextField()


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
    hotel_image = models.ForeignKey(HotelImage, on_delete=models.CASCADE)


