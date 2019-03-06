#!/bin/bash
heroku create louiscailleux-staging --region=eu --manifest;
heroku stack:set container;
git add *;
git commit -m "Updated heroku configuration."
git push origin master;
git push heroku master;

