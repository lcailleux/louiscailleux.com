from django.contrib import admin
from django.urls import path
from django.conf.urls import include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('contact.urls')),
    path('', include('cms.urls')),
    path('', include('projects.urls'))
]
