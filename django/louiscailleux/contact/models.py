import os
from django.core.mail import send_mail
from django.db import models
from decouple import config


class Contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    subject = models.CharField(max_length=100)
    message = models.CharField(max_length=1000)

    def __str__(self):
        return self.subject

    def get_email(self):
        return self.email


class ContactEmail(models.Model):
    @staticmethod
    def send(contact_fields):
        email_message = 'Contact information\r\n'
        for attr, value in contact_fields.items():
            email_message = email_message + '\r\n' + '- ' + attr + ': ' + str(value)

        if 'HEROKU' in os.environ:
            email_recipient = os.environ.get('EMAIL_RECIPIENT')
        else:
            email_recipient = config('EMAIL_RECIPIENT')

        send_mail(
            'louiscailleux.com - contact',
            email_message,
            contact_fields.get('email'),
            [email_recipient],
            fail_silently=False,
        )
