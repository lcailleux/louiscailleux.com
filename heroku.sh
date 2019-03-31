#!/bin/bash
if [[ $1 == "staging" ]]
then
    heroku create louiscailleux-backend-staging --region=eu --remote staging
    heroku buildpacks:set heroku/python
    heroku config:set $(cat .env.staging | sed '/^$/d; /#[[:print:]]*$/d')
    git push staging server:master;
elif [[ $1 == "production" ]]
then
    heroku create louiscailleux-backend --region=eu
    heroku buildpacks:set heroku/python --app louiscailleux-backend
    heroku config:set $(cat .env.production | sed '/^$/d; /#[[:print:]]*$/d') --app louiscailleux-backend
    git push heroku server:master;
else
    echo "Usage: ./heroku.sh (staging|production)"
fi;