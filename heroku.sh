#!/bin/bash
heroku create louiscailleux-staging --region=eu
heroku buildpacks:add --index 1 heroku/python --app louiscailleux-staging


#heroku local:run python django/louiscailleux/manage.py migrate

git add *;
git commit -m "Updated heroku configuration."
git push heroku master;