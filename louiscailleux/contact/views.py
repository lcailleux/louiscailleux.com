# contact/views.py
from django import forms
from django.contrib import messages
from django.shortcuts import render
from django.views.generic.edit import FormView
from django.http import HttpResponse
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy
from rest_framework import generics
from contact.models import Contact
from contact.serializers import ContactSerializer


class ContactListCreate(generics.ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = (
            "name",
            "email",
            "phone",
            "subject",
            "message",
        )


def submit(request):
    if request.method == 'POST':
        contact_form = ContactForm(request.POST)
        if contact_form.is_valid():
            contact_form.save()
            messages.success(request, "Your message was successfully sent. I will get back to you shortly.")
            return HttpResponseRedirect(reverse_lazy('contact:view'))
        else:
            messages.error(request, "Invalid contact data, could you try again?")
            return render(request, 'contact/view.html')
    elif request.method == 'GET':
        return HttpResponse(status=404)


class ContactView(FormView):
    form_class = ContactForm

    def get(self, request, **kwargs):
        return render(request, 'contact/view.html', {
            'form': self.form_class,
        })
