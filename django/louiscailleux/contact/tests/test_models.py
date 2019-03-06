from django.test import TestCase
from ..models import Contact


class BlockTest(TestCase):
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

    def test_contact_email(self):
        test_contact_1 = Contact.objects.get(email='test1@test.com')
        test_contact_2 = Contact.objects.get(email='test2@test.com')
        self.assertEqual(test_contact_1.get_email(), "test1@test.com")
        self.assertEqual(test_contact_2.get_email(), "test2@test.com")
