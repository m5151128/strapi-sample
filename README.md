# strapi-sample


- make `./strapi-app/.env`

```
# Server
HOST=0.0.0.0
PORT=1337

# Secrets
APP_KEYS=T2XD1acDK1ZDP53JD8Svhw==,Ol8OLn/bd1PiSx34pk4aRw==,8AiTKEYwe67/+fcHnR7hHQ==,aSGNReugHVhzBj/3CrwQFg==
API_TOKEN_SALT=VM7NT61sqrty/7qMy+bg7A==
ADMIN_JWT_SECRET=u+WB7ZEJg989iesi7u4Lkw==
TRANSFER_TOKEN_SALT=SCryCcLjz5DhJAf/DaQQyw==

# Database
DATABASE_CLIENT=mysql
DATABASE_HOST=strapi-db
DATABASE_PORT=3306
DATABASE_NAME=strapi
DATABASE_USERNAME=user
DATABASE_PASSWORD=password
DATABASE_SSL=false
DATABASE_FILENAME=
JWT_SECRET=3WrVrJRxvcqKwUotZPtf2g==
```

## start up docker

```
$ docker compose up
```