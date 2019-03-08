#!/bin/bash
heroku create louiscailleux-staging --region=eu
heroku buildpacks:add --index 1 heroku/nodejs --app louiscailleux-staging
heroku buildpacks:add --index 2 heroku/python --app louiscailleux-staging
heroku config:set DISABLE_COLLECTSTATIC=1

heroku addons:create jawsdb-maria:kitefin

git add *;
git commit -m "Updated heroku configuration."
git push heroku master;

heroku addons:destroy heroku-postgresql:hobby-dev