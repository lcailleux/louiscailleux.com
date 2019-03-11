#!/bin/bash
if [[ $1 == "staging" ]]
then
    heroku create louiscailleux-frontend-staging --region=eu --remote staging
    heroku buildpacks:set heroku/nodejs
    heroku config:set BACKEND_URL=https://louiscailleux-backend-staging.herokuapp.com
    heroku plugins:install @jasonheecs/heroku-vim
    git push staging client:master;
elif [[ $1 == "production" ]]
then
    heroku create louiscailleux-frontend --region=eu
    heroku buildpacks:set heroku/nodejs
    heroku config:set BACKEND_URL=https://louiscailleux-backend.herokuapp.com
    heroku plugins:install @jasonheecs/heroku-vim
    git push heroku client:master;
else
    echo "Usage: ./heroku.sh (staging|production)"
fi;