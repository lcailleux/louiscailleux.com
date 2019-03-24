# cms/urls.py
from django.conf.urls import url
from .views import BlockApiView

app_name = 'cms'

urlpatterns = [
    url(r'V1/api/block$', BlockApiView.as_view())
]
