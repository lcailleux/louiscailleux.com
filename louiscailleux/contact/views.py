# contact/views.py
import urllib
import json
from django.conf import settings
from rest_framework import mixins, viewsets, status
from rest_framework.response import Response
from .utils.contact_email import ContactEmail
from .models import Contact
from .serializers import ContactSerializer


class ContactViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        captcha_result = self.validate_captcha(request)
        if not captcha_result['success']:
            return Response(captcha_result, status=status.HTTP_400_BAD_REQUEST)

        response = super(ContactViewSet, self).create(request, args, kwargs)
        if response and response.status_code == status.HTTP_201_CREATED:
            ContactEmail.send(request.data)
        return response

    def validate_captcha(self, request):
        recaptcha_response = request.data.get('g-recaptcha-response')
        url = settings.GOOGLE_RECAPTCHA_URL
        values = {
            'secret': settings.GOOGLE_RECAPTCHA_SECRET_KEY,
            'response': recaptcha_response
        }
        data = urllib.parse.urlencode(values).encode()
        req = urllib.request.Request(url, data=data)
        response = urllib.request.urlopen(req)
        result = json.loads(response.read().decode())
        return result
