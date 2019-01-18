# core/views.py
from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = "core/index.html"


class AboutPageView(TemplateView):
    template_name = "core/about.html"
