# <p align="center">Sucs and Sched Backend</p>

## <p align="center">https://sucsandsched.herokuapp.com</p>

### Set Up

- Create new .env, add the following:
  - PORT (eg PORT=9000)
  - NODE_ENV=development - this is for db-config file (investigate how this all pipes together)
  - DEV_DATABASE_URL=postgresql://postgres:YOUR_PGADMIN4_PASSWORD@localhost:5432/DEV_DB
  - TESTING_DATABASE_URL=postgresql://postgres:YOUR_PGADMIN4_PASSWORD@localhost:5432/TEST_DB
    - 'postgresql' is default pgadmin4 username
    - YOUR_PGADMIN4_DATABASE is master password for pgAdmin4
    - 5432 is default pgAdmin4 port - change if you changed in pgAdmin4 setup
  - JWT_SECRET (eg JWT_SECRET=secret)
  - BCRYPT_ROUNDS (eg BCRYPT_ROUNDS=10)

- edit scripts in package.json, swapping out HEROKU_APP_NAME with your app

- Useful scripts:
  - npx knex migrate:make migration-name
  - npx knex seed:make 00-seed-name

### Heroku Deploy:
  - On new project, add Heroku Postgres under Resources. This will set DATABASE_URL config var in Heroku to the db it creates, used in knexfile.js.
  - set JWT_SECRET environment variable
  - set BCRYPT_ROUNDS environment variable

### To-Do (after MVP):
1. Investigate generating uuids
  - change `getByUsername` in users-model to `getById` 
    - this will affect client side - specifically in Account component


## <p align="center">FIRST SET OF ENDPOINTS HERE</p>

### <p align="center">User examples:</p>

```json
[
  
]
```

### [POST] /auth/register

- INFO HERE
  - more info here

_What you send:_

```json
{
  
}
```

_What you receive:_

```json
{
  
}
```

### [POST] /auth/login

- INFO HERE
  - more info here

_What you send:_

```json
{
  
}
```

_What you receive:_

```json
{
  
}
```

## <p align="center">SECOND SET OF ENDPOINTS HERE</p>


### [GET] /api/sucs

- INFO HERE
  - more info here

_What you receive:_

```json

{
   
}

```


### [POST] /api/

- INFO HERE
  - more info here

_What you send:_

```json
{
  
}
```

_What you receive:_

```json
{
  
}
```