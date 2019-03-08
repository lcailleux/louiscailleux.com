#!/bin/bash
heroku buildpacks:add --index 1 heroku/nodejs
heroku buildpacks:add --index 2 heroku/python

heroku create louiscailleux-staging --region=eu;
#heroku addons:create jawsdb-maria:kitefin
#heroku local:run python django/louiscailleux/manage.py migrate

git add *;
git commit -m "Updated heroku configuration."
git push heroku master;