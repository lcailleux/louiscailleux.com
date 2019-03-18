from urllib.parse import urlparse
from django.conf import settings
from rest_framework import permissions
import re


class IsRequestHostAuthorized(permissions.BasePermission):
    def has_permission(self, request, view):
        origin = request.META.get('HTTP_ORIGIN')
        if not origin:
            return False

        url = urlparse(origin)
        if self.origin_found_in_white_lists(origin, url):
            return True
        return False

    def origin_found_in_white_lists(self, origin, url):
        return (
            url.netloc in settings.CORS_ORIGIN_WHITELIST
            or (origin == 'null' and origin in settings.CORS_ORIGIN_WHITELIST)
            or self.regex_domain_match(origin)
        )

    def regex_domain_match(self, origin):
        for domain_pattern in settings.CORS_ORIGIN_REGEX_WHITELIST:
            if re.match(domain_pattern, origin):
                return origin
