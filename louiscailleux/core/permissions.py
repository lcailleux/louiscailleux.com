from urllib.parse import urlparse
from rest_framework import permissions
from corsheaders.middleware import CorsMiddleware


class IsRequestHostAuthorized(permissions.BasePermission):
    def has_permission(self, request, view):
        origin = request.META.get('HTTP_ORIGIN')
        if not origin:
            return False

        url = urlparse(origin)
        if CorsMiddleware.origin_found_in_white_lists(origin, url):
            return True

        return False
