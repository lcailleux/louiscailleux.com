#!/bin/bash
if [[ $1 == "staging" ]]
then
    heroku create louiscailleux-frontend-staging --region=eu --remote staging
    heroku config:set $(cat .env.staging | sed '/^$/d; /#[[:print:]]*$/d')
    heroku buildpacks:set heroku/nodejs
    git push staging client:master;
elif [[ $1 == "production" ]]
then
    heroku create louiscailleux-frontend --region=eu
    heroku config:set $(cat .env.production | sed '/^$/d; /#[[:print:]]*$/d')
    heroku buildpacks:set heroku/nodejs
    git push heroku client:master;
else
    echo "Usage: ./heroku.sh (staging|production)"
fi;