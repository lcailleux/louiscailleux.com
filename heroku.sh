#!/bin/bash
# Add env file in django/.env
DJANGO_SECRET_KEY=$(grep SECRET_KEY django/.env | cut -d '=' -f2-)
if [[ $1 == "staging" ]]
then
    python django/louiscailleux/manage.py collectstatic --noinput
    heroku create louiscailleux-backend-staging --region=eu --remote staging
    heroku buildpacks:set heroku/python
    heroku config:set SECRET_KEY="$DJANGO_SECRET_KEY"
    heroku config:set DISABLE_COLLECTSTATIC=1
    heroku config:set HEROKU=true
    heroku config:set PYTHONPATH=/app/.heroku/python/lib/python3.7/site-packages
    heroku addons:create jawsdb-maria:kitefin
    heroku addons:create logentries:le_tryit
    git push staging server:master;
    heroku addons:destroy heroku-postgresql:hobby-dev --confirm louiscailleux-backend-staging
elif [[ $1 == "production" ]]
then
    python django/louiscailleux/manage.py collectstatic --noinput
    heroku create louiscailleux-backend --region=eu
    heroku buildpacks:set heroku/python
    heroku config:set SECRET_KEY="$DJANGO_SECRET_KEY"
    heroku config:set DISABLE_COLLECTSTATIC=1
    heroku config:set HEROKU=true
    heroku config:set PYTHONPATH=/app/.heroku/python/lib/python3.7/site-packages
    heroku addons:create jawsdb-maria:kitefin
    heroku addons:create logentries:le_tryit
    git push heroku server:master;
    heroku addons:destroy heroku-postgresql:hobby-dev --confirm louiscailleux-staging
else
    echo "Usage: ./heroku.sh (staging|production)"
fi;