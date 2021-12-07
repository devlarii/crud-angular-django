
from rest_framework import serializers, viewsets
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer, ProductSimpleSerializer
from rest_framework.response import Response


class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


    def list(self, request, *args, **kwargs):
        queryset = Product.objects.all()
        serializer = ProductSimpleSerializer(queryset, many=True)
        return Response(serializer.data)