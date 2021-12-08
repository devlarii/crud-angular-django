from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=500,blank=True, null=True)
    price = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='products_image', blank=True, null=True)


    def __str__(self):
        return self.name



