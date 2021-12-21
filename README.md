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
  - Returns an array of all potlucks with their properties. Organizer/username are the same person, returns username attribute for convenience

_What you receive:_

```json
[
  {
      "potluck_id": 2,
      "potluck_name": "a day out",
      "potluck_description": null,
      "date": "Jan 1",
      "time": "10 pm",
      "location": "the park",
      "organizer": 1,
      "username": "userone"
  },
  {
      "potluck_id": 1,
      "potluck_name": "Grandma's 50th!",
      "potluck_description": "A lovely day in the park",
      "date": "June 1, 2022",
      "time": "1:00PM",
      "location": "Laurelhurst Park",
      "organizer": 1,
      "username": "userone"
  }
]
```


### [POST] /api/potlucks

- Create a new potluck
  - requires the fields potluck_name, date, time, and location all as strings
  - requires an organizer as an integer (this should match the user_id of the logged in user, let me know if this causes trouble)
  - can optionally provide a string for potluck_description field, but not required (see return object below)
  - returns the new potluck object

_What you send:_

```json
{
  "potluck_name": "a day out",
  "date": "Jan 1",
  "time": "10 pm",
  "location": "the park",
  "organizer": 1
}
```

_What you receive:_

```json
{
  "potluck_id": 2,
  "potluck_name": "a day out",
  "potluck_description": null,
  "date": "Jan 1",
  "time": "10 pm",
  "location": "the park",
  "organizer": 1
}
```


### [GET] /api/potlucks/:potluck_id

- Get a potluck by id

_What you receive:_

```json
{
  "potluck_id": 1,
  "potluck_name": "Grandma's 50th!",
  "potluck_description": "A lovely day in the park",
  "date": "June 1, 2022",
  "time": "1:00PM",
  "location": "Laurelhurst Park",
  "organizer": 1,
  "username": "userone"
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