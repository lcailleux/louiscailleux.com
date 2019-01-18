# core/urls.py
from django.conf.urls import url
from frontend import views

app_name = 'core'
urlpatterns = [
    url(r'^$', views.IndexView.as_view(), name='index'),
    url(r'^about/$', views.AboutPageView.as_view(), name='about')
]
