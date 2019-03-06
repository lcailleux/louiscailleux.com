#!/bin/bash
heroku create louiscailleux_frontend-staging --region=eu --manifest;
heroku stack:set container;
git add heroku.yml;
git commit -m "Updated heroku configuration."
git push origin client;
git push heroku client;