#!/bin/bash
heroku create louiscailleux-staging --region=eu
heroku buildpacks:add --index 1 heroku/nodejs --app louiscailleux-staging
heroku buildpacks:add --index 2 heroku/python --app louiscailleux-staging
heroku config:set NODE_ENV=5000
heroku config:set DISABLE_COLLECTSTATIC=1
heroku config:set HEROKU=true
heroku config:set PYTHONPATH=/app/.heroku/python/lib/python3.7/site-packages

heroku addons:create jawsdb-maria:kitefin

git add *;
git commit -m "Updated heroku configuration."
git push heroku master;

heroku addons:destroy heroku-postgresql:hobby-dev --confirm louiscailleux-staging