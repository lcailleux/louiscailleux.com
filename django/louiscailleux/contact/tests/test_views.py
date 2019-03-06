from django.test import TestCase, Client
from django.urls import reverse
from rest_framework import status
from ..models import Contact
from ..serializers import ContactSerializer


class GetAllContactsTest(TestCase):
    client = Client()

    def setUp(self):
        Contact.objects.create(
            email='test1@test.com',
            name='Test1',
            phone="0000000000",
            subject='First test subject',
            message='First test message'
        )
        Contact.objects.create(
            email='test2@test.com',
            name='Test2',
            phone="0000000000",
            subject='Second test subject',
            message='Second test message'
        )

    def test_get_all_contacts(self):
        response = self.client.get('api/contact')
        contacts = Contact.objects.all()
        serializer = ContactSerializer(contacts, many=True)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
