# contact/urls.py
from rest_framework import routers
from .views import BlockReadOnlyViewSet

app_name = 'cms'

router = routers.SimpleRouter()
router.register(r'V1/api/block', BlockReadOnlyViewSet)

urlpatterns = []
urlpatterns += router.urls
