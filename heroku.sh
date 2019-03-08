#!/bin/bash
heroku create louiscailleux-frontend-staging --region=eu --manifest;
heroku stack:set container --app louiscailleux-frontend-staging;
heroku config:set BACKEND_URL=https://louiscailleux-backend-staging.herokuapp.com
git add *;
git commit -m "Updated heroku configuration."
git push origin client;
git push heroku client:master;