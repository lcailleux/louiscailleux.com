# core/urls.py
from django.conf.urls import url
from core import views

urlpatterns = [
    url(r'^$', views.HomePageView.as_view()),
    url(r'^about/$', views.AboutPageView.as_view())
]