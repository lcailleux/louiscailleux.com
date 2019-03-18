#!/bin/bash
# Add env file in django/.env
DJANGO_SECRET_KEY=$(grep SECRET_KEY django/.env | cut -d '=' -f2-)
if [[ $1 == "staging" ]]
then
    heroku create louiscailleux-backend-staging --region=eu --remote staging
    heroku buildpacks:set heroku/python
    heroku config:set SECRET_KEY="$DJANGO_SECRET_KEY"
    heroku config:set HEROKU=true
    heroku config:set PYTHONPATH=/app/.heroku/python/lib/python3.7/site-packages
    heroku addons:create sendgrid:starter
    git push staging server:master;
elif [[ $1 == "production" ]]
then
    heroku create louiscailleux-backend --region=eu
    heroku buildpacks:set heroku/python
    heroku config:set SECRET_KEY="$DJANGO_SECRET_KEY"
    heroku config:set HEROKU=true
    heroku config:set PYTHONPATH=/app/.heroku/python/lib/python3.7/site-packages
    heroku addons:create sendgrid:starter
    git push heroku server:master;
else
    echo "Usage: ./heroku.sh (staging|production)"
fi;