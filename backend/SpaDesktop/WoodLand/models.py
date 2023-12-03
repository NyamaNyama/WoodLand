from django.db import models
from django.contrib.auth.models import User



class Score(models.Model):
    score = models.PositiveBigIntegerField(verbose_name = "Рекорд")
    user = models.ForeignKey(User, verbose_name = "Игрок",on_delete = models.CASCADE,default=0)    
