# Authentication with Flask, React, and Docker

[![pipeline status](https://gitlab.com/arminhimself/flask-react-auth/badges/master/pipeline.svg)](https://gitlab.com/arminhimself/flask-react-auth/commits/master)



$ export REACT_APP_USERS_SERVICE_URL=http://localhost:5001
$ docker-compose up -d --build

$ docker-compose exec users python manage.py recreate_db
$ docker-compose exec users python manage.py seed_db

$ docker-compose exec users pytest "project/tests" -p no:warnings
$ docker-compose exec users flake8 project
$ docker-compose exec users black project
$ docker-compose exec users /bin/sh -c "isort project/*/*.py"