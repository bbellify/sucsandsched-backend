# Sucs and Sched Backend

## https://sucsandsched.herokuapp.com

### To-dos for template
- replace sucsandsched in package.json scripts with HEROKU_APP_NAME
  - update the note on this in set up, below
- swap out URL above
- 

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

### To-Do (after MVP):
1. Investigate generating uuids
  - change `getByUsername` in users-model to `getById` 
    - this will affect client side - specifically in Account component

## FIRST SET OF ENDPOINTS HERE

### User examples:

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

## MORE ENDPOINTS HERE

### [GET] /api/sucs

The router for this set of endpoints is a bit clunkier than it needs to be because I wanted to keep an open sucs endpoint that wasn't restricted for easy access to the schedule. If that weren't the case, you could add the restricted middleware to the whole endpoint for easy locking. See sucs-router for notes.

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