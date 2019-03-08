#!/bin/bash
heroku create louiscailleux-staging --region=eu --remote staging
heroku buildpacks:add --index 1 heroku/nodejs --app louiscailleux-staging
heroku buildpacks:add --index 2 heroku/python --app louiscailleux-staging

#heroku addons:create jawsdb-maria:kitefin
#heroku local:run python django/louiscailleux/manage.py migrate

git add *;
git commit -m "Updated heroku configuration."
git push heroku master;