# Simple Auhentication And Authorization
This is a Node.js service that supports username and password authentication with JSON Web Token(JWT).

## Getting Started
### Prerequisites
* Nodejs
* Npm
* Postgres

### Installing
1. Install dependencies
```
npm install
```
2. Create manually postgres database 
```
create database <database name>
```
3. Create postgres table 
```
node db/make.js
```


## Run The Server
```
node server.js
```

### APIs
# Sign up
```
POST /sign-up
```
```
{
  firstName,
  lastName,
  username,
  password
}
  ```
  Creates new user and stores it in postgres database. password is stored hashed.
  
  # Sign in
  ```
  POST /sign-in
  ```
  ```
  {
    username,
    password
  }
  ```
  User signs in by providing username and password. Token will be returned.
  ```
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlciI6ImVsaTEyMyIsImlhdCI6MTU4ODM2MDAzNSwiZXhwIjoxNTg4MzYwOTM1fQ.bLYDAIxpou8AnJznBl_taJD4iTAv1DbeGCeNtW-62Ww"
  }
```
# user Routes
```
Post /authUser
```
```
  'You Are Authorize To Access This API'
```
Authorizes user to access.
 

