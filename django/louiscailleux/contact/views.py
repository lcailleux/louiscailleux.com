# contact/views.py
from rest_framework import mixins, viewsets, status
from .models import Contact, ContactEmail
from .serializers import ContactSerializer


class ContactViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        response = super(ContactViewSet, self).create(request, args, kwargs)
        if response and response.status_code == status.HTTP_201_CREATED:
            ContactEmail.send(request.data)
        return response
