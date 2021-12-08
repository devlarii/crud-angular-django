
from rest_framework import serializers, viewsets
from rest_framework.response import Response
from .models import Product
from .serializers import ProductSerializer, ProductSimpleSerializer
from rest_framework.response import Response
from rest_framework.authentication import BasicAuthentication, TokenAuthentication, SessionAuthentication
from rest_framework.permissions import IsAuthenticated

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    authentication_calsses = [TokenAuthentication, BasicAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        queryset = Product.objects.all()
        serializer = ProductSimpleSerializer(queryset, many=True)
        return Response(serializer.data)