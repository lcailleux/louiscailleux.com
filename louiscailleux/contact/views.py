# contact/views.py
from django.shortcuts import render
from django.views.generic import TemplateView
from django.http import HttpResponseRedirect


def submit(request):
    return HttpResponseRedirect('/contact')


class ContactPage(TemplateView):
    def get(self, request, **kwargs):
        return render(request, 'contact.html', context=None)
