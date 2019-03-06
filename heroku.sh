#!/bin/bash
heroku addons:create jawsdb-maria
heroku create louiscailleux-backend-staging --region=eu --manifest;
heroku stack:set container --app louiscailleux-backend-staging;
git add *;
git commit -m "Updated heroku configuration."
git push origin server;
git push heroku server:master;