from django.shortcuts import render
from .models import Score
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import generics
from .serializers import ScoreSerializer

class ScoresAPIView(generics.ListCreateAPIView):
    queryset=Score.objects.all()
    serializer_class = ScoreSerializer
    #permission_classes=(IsAuthenticatedOrReadOnly,)
