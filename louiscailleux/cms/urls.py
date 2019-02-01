# contact/urls.py
from rest_framework import routers
from .views import BlockReadOnlyViewSet, BlockIdentifierDetailViewSet

app_name = 'cms'

router = routers.SimpleRouter()
router.register(r'V1/api/block', BlockReadOnlyViewSet)
router.register(r'V1/api/block/identifier', BlockIdentifierDetailViewSet)

urlpatterns = []
urlpatterns += router.urls
