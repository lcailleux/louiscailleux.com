#!/bin/bash
if [[ $1 == "staging" ]]
then
    heroku create louiscailleux-backend-staging --region=eu --remote staging
    heroku buildpacks:set heroku/python
    heroku config:set DISABLE_COLLECTSTATIC=1
    heroku config:set HEROKU=true
    heroku config:set PYTHONPATH=/app/.heroku/python/lib/python3.7/site-packages
    heroku addons:create jawsdb-maria:kitefin
    git push staging server:master;
    heroku addons:destroy heroku-postgresql:hobby-dev --confirm louiscailleux-backend-staging
elif [[ $1 == "production" ]]
then
    heroku create louiscailleux-backend --region=eu
    heroku buildpacks:set heroku/python
    heroku config:set DISABLE_COLLECTSTATIC=1
    heroku config:set HEROKU=true
    heroku config:set PYTHONPATH=/app/.heroku/python/lib/python3.7/site-packages
    heroku addons:create jawsdb-maria:kitefin
    git push heroku server:master;
    heroku addons:destroy heroku-postgresql:hobby-dev --confirm louiscailleux-staging
else
    echo "Usage: ./heroku.sh (staging|production)"
fi;