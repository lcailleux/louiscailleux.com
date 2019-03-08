#!/bin/bash

heroku buildpacks:add --index 1 heroku/nodejs
heroku buildpacks:add --index 2 heroku/python
heroku local:run python manage.py migrate
python django/louiscailleux/manage.py collectstatic

heroku create louiscailleux-staging --region=eu;
#heroku addons:create jawsdb-maria:kitefin

git add *;
git commit -m "Updated heroku configuration."
git push origin master;
git push heroku master;