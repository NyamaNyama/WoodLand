from rest_framework import serializers
from .models import Score
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username',)

class ScoreSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Score
        fields = ('user','score')    
        
    def create(self, validated_data):
        username=self.context['request'].data['user']['username']
        user_instance=User.objects.get(username=username)
        score=Score.objects.create(user=user_instance,**validated_data)
        return score



