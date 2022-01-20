# Sucs and Sched Backend

## https://sucsandsched.herokuapp.com

## MVP

- [ ] Finish required functionality to complete MVP for <a href='https://github.com/bbellify/sucsandsched-frontend'>frontend</a>

### Stretch
- [ ] Investigate generating uuids
  - change `getByUsername` in users-model to `getById` 
    - this will affect client side - specifically in Account component

### To-dos for templatization
- replace sucsandsched in package.json scripts with HEROKU_APP_NAME
  - update the note on this in set up, below
- swap out URL at top of readme
- may want to consider revisiting the whole auth flow, the user/account routers, etc. might be ok, may be more of a front end project

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

- in package.json, swap out HEROKU_APP_NAME (in current version sucsandsched, swap this out in template) with name of your app
  - "migrateh"
  - "rollbackh"
  - "databaseh"
  - "seedh"

- Useful scripts:
  - npx knex migrate:make migration-name
  - npx knex seed:make 00-seed-name
  - see package.json for more custom scripts

### Heroku Deploy:
  - On new project, add Heroku Postgres under Resources. This will set DATABASE_URL config var in Heroku to the db it creates, used in knexfile.js.
  - set JWT_SECRET environment variable
  - set BCRYPT_ROUNDS environment variable

</br>

## Public Endpoints (non-restricted)

### Register/Login

#### [POST] /auth/register

- Register a new user
  - username required (unique)
  - password required
  - first_name required

_What you send:_

```json
{
  "username": "luvs2run",
  "password": "randompassword",
  "first_name": "madonna"
}
```

_What you receive:_

```json
{
  "username": "luvs2run",
  "first_name": "madonna"
}
```

#### [POST] /auth/login

- Log in with existing user
  - username and password required
  - returns user object with welcome message and token

_What you send:_

```json
{
  "username": "luvs2run",
  "password": "randompassword"
}
```

_What you receive:_

```json
{
  "username": "luvs2run",
  "first_name": "madonna",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImlhbWF1c2VyIiwiaWF0IjoxNjM2ODYyMDY5LCJleHAiOjE2MzY5NDg0Njl9.fhVnkCzPDA5kubS1fo3mj57AEZcon267qH7dQ5Rk7rU"
}
```

### Sucs

#### [GET] /api/sucs 

- Gets sucs schedule - can be used without auth

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

## Restricted Endpoints - must be logged in user

#### Account

### [GET] /api/account

- Gets logged in user's account information

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

### Sucs

#### [GET] /api/sucs/user

- Gets logged in user's sucs

_What you receive:_

```json

{
   
}

```

#### [POST] /api/sucs/toggle

- Turns on/off sucs tracking for logged in user

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

#### [POST] /api/sucs/log

- Logs today's sucs as completed for logged in user

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