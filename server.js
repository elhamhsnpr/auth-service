const express = require("express");
mongoConnect = require('./db/index');

const signUpRoutes = require('./routes/sign-up');
const singInRoutes =require('./routes/sign-in');
const usersRoutes =require('./routes/users');




const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Sign UP Route
app.use(signUpRoutes);
//Sign In Route
app.use(singInRoutes);

//Authorizition
app.use(usersRoutes);


app.listen(8080);
console.log('server is running on 8080')

