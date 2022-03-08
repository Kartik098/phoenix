from django.db import models
from django.db.models import Model


class User(models.Model):
    fullname = models.CharField(max_length=45)
    username = models.CharField(max_length=45)
    password = models.CharField(max_length=45)


class Company(models.Model):
    cname = models.CharField(max_length=45)
    sitename = models.CharField(max_length=45)
    siteaddress = models.CharField(max_length=200)
    utillityname = models.CharField(max_length=45)
    category = models.CharField(max_length=45)
    emailaddress = models.CharField(max_length=45)
    contact_name = models.CharField(max_length=45)
    phone_no = models.IntegerField

    def __str__(self):
        return str(self.cname)
