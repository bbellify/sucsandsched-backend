# <p align="center">Potluck Planner api - December, 2021</p>

## <p align="center">https://potluckplan.herokuapp.com/</p>

## <p align="center">REGISTER / LOGIN</p>

### <p align="center">User examples:</p>

```json
[
  {
    "username": "userone",
    "password": "yeet"
  },
  {
    "username": "usertwo",
    "password": "yeet"
  }
]
```

### [POST] /api/auth/register

- Register a new user
  - _username required (must be a string | unique)_
  - _password required (must be a string)_

_What you send:_

```json
{
  "username": "iamauser",
  "password": "randompassword"
}
```

_What you receive:_

```json
{
  "message": "You have successfully created a new account with username 'iamauser'"
}
```

### [POST] /api/auth/login

- Login
  - _username and password required_
  - _returns the following:_
    - _message: { "Welcome back, iamauser" }_
    - _token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImlhbWF1c2VyIiwiaWF0IjoxNjQwMDQzMzg1LCJleHAiOjE2NDAxMjk3ODV9.0-ltuOZcQAaaqXOB8JCXDsiAUn4zAMDV9v5MG9DGRKI"_

_What you send:_

```json
{
  "username": "iamauser",
  "password": "randompassword"
}
```

_What you receive:_

```json
{
  "message": "Welcome back iamauser",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImlhbWF1c2VyIiwiaWF0IjoxNjM2ODYyMDY5LCJleHAiOjE2MzY5NDg0Njl9.fhVnkCzPDA5kubS1fo3mj57AEZcon267qH7dQ5Rk7rU",
  "user_id": 3
}
```


## <p align="center">POTLUCK INFO</p>


### [GET] /api/potlucks

- Get all potlucks

### [POST] /api/potlucks

- Create a new potluck
  - 
  - 

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


### [GET] /api/potlucks/:potluck_id

- Get a potluck by id

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

### [PUT] /api/potlucks/:potluck_id

- Edit a potluck by id

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

### [POST] /api/potlucks/:potluck_id/items

- Adds item to a potluck

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


### [GET] /api/potlucks/:potluck_id/guests

- Get guest list for a potluck

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

### [GET] /api/potlucks/:potluck_id/items

- Get food list for a potluck

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