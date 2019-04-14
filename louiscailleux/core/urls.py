# core/urls.py
from django.conf.urls import url
from .views import index

app_name = 'core'

urlpatterns = [
    url('^$', index)
]

