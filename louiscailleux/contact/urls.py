# contact/urls.py
from rest_framework import routers
from contact.views import ContactViewSet

app_name = 'contact'

router = routers.DefaultRouter(trailing_slash=False)
router.register(r'api/contact', ContactViewSet)

urlpatterns = []
urlpatterns += router.urls

