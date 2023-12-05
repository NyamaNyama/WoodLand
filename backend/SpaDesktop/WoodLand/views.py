from django.shortcuts import render
from .models import Score
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import generics
from .serializers import ScoreSerializer

class ScoresAPIView(generics.ListCreateAPIView):
    queryset=Score.objects.all().order_by('-score')
    serializer_class = ScoreSerializer
    #permission_classes=(IsAuthenticatedOrReadOnly,)
class ScoreAPIChange(generics.RetrieveUpdateDestroyAPIView):
    queryset=Score.objects.all()
    serializer_class=ScoreSerializer
    lookup_field='user__username'
