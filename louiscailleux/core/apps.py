from django.apps import AppConfig
from django.contrib.admin.apps import AdminConfig


class CoreConfig(AppConfig):
    name = 'core'


class LouisCailleuxAdminConfig(AdminConfig):
    default_site = 'core.admin.LouisCailleuxAdminSite'
