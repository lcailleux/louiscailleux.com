release: python louiscailleux/manage.py migrate
web: cd louiscailleux && gunicorn louiscailleux.wsgi --log-file -
worker: python worker/refresh.py