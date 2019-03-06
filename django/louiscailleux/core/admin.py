from django.contrib import admin
from django.utils.translation import gettext as _


class LouisCailleuxAdminSite(admin.AdminSite):
    site_header = _('Louis Cailleux | Administration')
    index_title = _('Louis Cailleux administration')
    site_title = _('louiscailleux.com admin')
