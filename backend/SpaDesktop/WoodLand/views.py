from django.shortcuts import render
from .models import Score
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import generics
from .serializers import ScoreSerializer

class ScoresAPIView(generics.ListAPIView):
    queryset=Score.objects.all()
    serizalizer = ScoreSerializer
    permission_classes=(IsAuthenticatedOrReadOnly)
