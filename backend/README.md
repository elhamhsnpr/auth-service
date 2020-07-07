# Simple Auhentication And Authorization
This is a Node.js service that supports username and password authentication with JSON Web Token(JWT).

## Getting Started
### Prerequisites
* Docker
* Docker-compose

## Run The Server
```
docker-compose up

```
The service is running on port 8080.

### APIs
The API example has endpoint  /routes to demonstrate  Authentication and roles  based authrization:

# Sign up
```
POST /sign-up
```
```
{
  firstName,
  lastName,
  username,
  password,
  userType
}
  ```
  Creates new user with differnt tyep (normal user and admin) and stores it in postgres database. password is stored hashed.
  
  # Sign in
  ```
  POST /sign-in
  ```
  ```
  {
    username,
    password,
    userType
  }
  ```
  User signs in by providing username , password. and userType. Token will be returned.
  ```
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlciI6ImVsaTEyMyIsImlhdCI6MTU4ODM2MDAzNSwiZXhwIjoxNTg4MzYwOTM1fQ.bLYDAIxpou8AnJznBl_taJD4iTAv1DbeGCeNtW-62Ww"
  }
```
# User
```
GET /getInfo
```
Return user information if the HTTP Authorization header contain valid JWT token and user is in the normal user role.

```
PUT /editInfo
```
```
{
  firstName,
  lastName,
  username
}
````
Update user's information if the HTTP Authorization header contain valid JWT token and user is in the normal user role.

```
DELETE /delete
```
Delete user's account if the HTTP Authorization header contain valid JWT token and user is in the normal user role.


# Admin
```
GET /admin/getInfo
```
```
{
  id
}
```
Return user's information by provideing user's ID if the HTTP Authorization header contain valid JWT token and user is in admin role.
if token is invalid or user is not in admmin role, 401 unauthorize response is returned.

```
POST /admin/add
```
Adds user providing by firstName,lastName,username,password and usertype  if the HTTP Authorization header contain valid JWT token and user is in admin role.if token is invalid or user is not in admmin role, 401 unauthorize response is returned.

```
DELETE /admin/delete
```
Delete user's account  if the HTTP Authorization header contain valid JWT token and user is in admin role.if token is invalid or user is not in admmin role, 401 unauthorize response is returned.

```
PUT /admin/edit
```
```
{
  firstName,
  lastName,
  username,
  id
}
````
Update user's information by provising user's ID if the HTTP Authorization header contain valid JWT token and user is in admin role.if token is invalid or user is not in admmin role, 401 unauthorize response is returned.