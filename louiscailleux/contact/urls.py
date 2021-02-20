# contact/urls.py
from rest_framework import routers
from .views import ContactViewSet

app_name = 'contact'

router = routers.SimpleRouter()
#router.register(r'V1/api/contact', ContactViewSet)

urlpatterns = []
urlpatterns += router.urls

