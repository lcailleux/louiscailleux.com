# contact/views.py
from rest_framework import mixins, viewsets
from .models import Contact
from .serializers import ContactSerializer


class ContactViewSet(mixins.CreateModelMixin,
                     mixins.ListModelMixin,
                     viewsets.GenericViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer
