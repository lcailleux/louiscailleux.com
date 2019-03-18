#!/bin/bash
if [[ $1 == "staging" ]]
then
    heroku create louiscailleux-frontend-staging --region=eu --remote staging
    heroku buildpacks:set mars/create-react-app
    heroku config:set REACT_APP_BACKEND_URL=https://louiscailleux-backend-staging.herokuapp.com
    heroku config:set REACT_APP_RECAPTCHA_KEY=6LfxHpcUAAAAAFtIyong1poMgkB_CmCXCKSU0uDT
    heroku plugins:install @jasonheecs/heroku-vim
    git push staging client:master;
elif [[ $1 == "production" ]]
then
    heroku create louiscailleux-frontend --region=eu
    heroku buildpacks:set mars/create-react-app
    heroku config:set REACT_APP_BACKEND_URL=https://louiscailleux-backend.herokuapp.com
    heroku config:set REACT_APP_RECAPTCHA_KEY=6LfxHpcUAAAAAFtIyong1poMgkB_CmCXCKSU0uDT
    heroku plugins:install @jasonheecs/heroku-vim
    git push heroku client:master;
else
    echo "Usage: ./heroku.sh (staging|production)"
fi;