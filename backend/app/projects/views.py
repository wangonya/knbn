from rest_framework import (
    status,
    views,
    mixins,
    generics,
)

from .models import Project
from .serializers import ProjectSerializer


class ProjectList(mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  generics.GenericAPIView,
                  ):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)
