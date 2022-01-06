# <p align="center">PROJECT TITLE HERE</p>

## <p align="center">https://your-url-here.com/</p>

Add this info to readme -
create .env with something like:
PORT=9000
NODE_ENV=development
DEV_DATABASE_URL=postgresql://postgres:PG_PASSWORD@localhost:5432/DATABASE_NAME
TESTING_DATABASE_URL=postgresql://postgres:PG_PASSWORD@localhost:5432/TESTING_DATABASE_NAME

- edit scripts with correct heroku app names

- useful scripts:
    - npx knex migrate:make migration-name
    - npx knex seed:make 00-seed-name

- References:
  - node-testing2-project
  - water my plants backend


## <p align="center">FIRST SET OF ENDPOINTS HERE</p>

### <p align="center">User examples:</p>

```json
[
  
]
```

### [POST] 

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


### [GET] /api/second-endpoint

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