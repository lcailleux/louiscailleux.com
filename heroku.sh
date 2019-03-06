#!/bin/bash
heroku create louiscailleux-frontend-staging --region=eu --manifest;
heroku stack:set container --app louiscailleux-frontend-staging;
git add *;
git commit -m "Updated heroku configuration."
git push origin client;
git push heroku client;