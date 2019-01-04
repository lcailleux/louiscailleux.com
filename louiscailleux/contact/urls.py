# contact/urls.py
from django.conf.urls import url
from contact import views

urlpatterns = [
    url('^$', views.ContactPage.as_view()),
    url('post', views.submit)
]