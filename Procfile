release: python django/louiscailleux/manage.py migrate && python django/louiscailleux/manage.py collectstatic --noinput
web: cd django/louiscailleux && gunicorn louiscailleux.wsgi --log-file -