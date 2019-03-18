# projects/views.py
from rest_framework import generics
from .models import Project
from .serializers import ProjectsSerializer


class ProjectsApiView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectsSerializer

    def get_queryset(self):
        queryset = Project.objects.all()
        language = self.request.query_params.get('language', None)
        if language:
            queryset = queryset.filter(language_code=language)

        return queryset
