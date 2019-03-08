release: cd django/louiscailleux && python manage.py makemigrations && python manage.py migrate
web: cd django/louiscailleux && gunicorn louiscailleux.wsgi --log-file -