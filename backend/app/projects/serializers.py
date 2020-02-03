from rest_framework import serializers

from .models import Project


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ('title', 'description', 'owner')

        # make description field optional
        extra_kwargs = {'description': {'required': False}}
