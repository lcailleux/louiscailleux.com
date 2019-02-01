# contact/urls.py
from django.conf.urls import url
from .views import BlockReadOnlyViewSet

app_name = 'cms'

urlpatterns = [
    url(r'V1/api/block/$', BlockReadOnlyViewSet.as_view())
]
