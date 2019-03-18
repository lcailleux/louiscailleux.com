# projects/urls.py
from django.conf.urls import url
from .views import ProjectsApiView

app_name = 'projects'

urlpatterns = [
    url(r'V1/api/projects$', ProjectsApiView.as_view())
]
