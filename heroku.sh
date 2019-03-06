#!/bin/bash
heroku create louiscailleux-backend-staging --region=eu --manifest;
heroku config:set HEROKU=true
heroku addons:create jawsdb-maria:kitefin
heroku stack:set container --app louiscailleux-backend-staging;
git add *;
git commit -m "Updated heroku configuration."
git push origin server;
git push heroku server:master;