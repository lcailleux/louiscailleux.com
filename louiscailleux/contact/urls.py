# contact/urls.py
from django.conf.urls import url
from contact import views

app_name = 'contact'
urlpatterns = [
    url('^$', views.ContactView.as_view(), name='view'),
    url('post', views.submit, name='submit'),
    url('list', views.ContactListCreate.as_view(), name='list'),
]