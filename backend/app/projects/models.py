from django.db import models

from core.models import User


class Project(models.Model):
    title = models.CharField(max_length=100, null=False)
    description = models.TextField()
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
