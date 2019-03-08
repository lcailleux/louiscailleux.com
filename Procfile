release: cd django/louiscailleux && python manage.py migrate
web: cd django/louiscailleux && python manage.py migrate && gunicorn louiscailleux.wsgi --log-file -