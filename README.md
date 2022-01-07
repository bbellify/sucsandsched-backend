# <p align="center">Sucs and Sched Backend</p>

## <p align="center">https://sucsandsched.herokuapp.com</p>

### Set Up

1. Include environment variables for the following (here and heroku):
  - JWT_SECRET
  - BCRYPT_ROUNDS

- useful scripts:
  - npx knex migrate:make migration-name
  - npx knex seed:make 00-seed-name

- References:
  - node-testing2-project
  - potlucks backend

### If using as a template (finish this):

1. edit scripts in package.json with correct heroku app names
2. made .env with the following variables:
  - NODE_ENV=development
  - DEV_DATABASE_URL=postgresql://postgres:PG_PASSWORD@localhost:5432/DEV_DB
  - TESTING_DATABASE_URL=postgresql://postgres:PG_PASSWORD@localhost:5432/TEST_DB
  - PORT

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