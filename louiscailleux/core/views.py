# core/views.py
from django.shortcuts import render
from django.views.generic import TemplateView


class HomePageView(TemplateView):
    template_name = "index.html"


class AboutPageView(TemplateView):
        def get(self, request, **kwargs):
            return render(request, 'about.html', context=None)
