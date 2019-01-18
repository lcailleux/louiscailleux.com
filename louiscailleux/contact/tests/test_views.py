from django.test import TestCase
from django.urls import reverse
from django.contrib.messages import constants as MSG


class ContactViewTests(TestCase):
    def test_contact_view_status_code(self):
        response = self.client.get('/en/contact/')
        self.assertEquals(response.status_code, 200)

    def test_view_url_by_name(self):
        response = self.client.get(reverse('contact:view'))
        self.assertEquals(response.status_code, 200)

    def test_view_uses_correct_template(self):
        response = self.client.get(reverse('contact:view'))
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'contact/view.html')


class ContactSubmitTests(TestCase):
    def test_get_call(self):
        response = self.client.get(reverse('contact:submit'))
        self.assertEquals(response.status_code, 404)

    def test_post_call_with_invalid_data(self):
        response = self.client.post(reverse('contact:submit'), {})
        messages = list(response.context['messages'])
        self.assertEquals(response.status_code, 200)
        self.assertEqual(len(messages), 1)
        self.assertEqual(messages[0].level, MSG.ERROR)
        self.assertEqual(str(messages[0]), "Invalid contact data, could you try again?")
        self.assertTemplateUsed('contact/view.html')

    def test_post_call_with_valid_data(self):
        response = self.client.post(reverse('contact:submit'), {
            "name": "test name",
            "email": "test email",
            "phone": "test phone",
            "subject": "test subject",
            "message": "test message",
        })
        self.assertTemplateUsed('contact/view.html')
        self.assertRedirects(response, reverse('contact:view'))
