# Generated by Django 5.0.7 on 2024-07-28 14:23

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotel', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='hotelimage',
            name='hotel',
        ),
        migrations.AddField(
            model_name='hotel',
            name='hotel_image',
            field=models.OneToOneField(default=1, on_delete=django.db.models.deletion.CASCADE, to='hotel.hotelimage'),
            preserve_default=False,
        ),
    ]