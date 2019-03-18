import os
from django.core.mail import send_mail
from decouple import config


class ContactEmail:
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
