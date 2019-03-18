from django.conf import settings
from rest_framework import permissions


class IsRequestHostAuthorized(permissions.BasePermission):
    def has_permission(self, request, view):
        whitelist = settings.CORS_ORIGIN_WHITELIST

        try:
            if request.META['REMOTE_HOST'] in whitelist:
                return True
        except KeyError:
            try:
                if request.META['REMOTE_ADDR'] in whitelist:
                    return True
            except KeyError:
                return False
        
        return False
