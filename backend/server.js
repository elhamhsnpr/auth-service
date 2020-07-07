const express = require("express");


const signUpRoutes = require('./routes/sign-up');
const singInRoutes =require('./routes/sign-in');
const usersRoutes =require('./routes/users');
const adminRoutes =require('./routes/admin');




const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Sign UP Route
app.use(signUpRoutes);
//Sign In Route
app.use(singInRoutes);

//users 
app.use(usersRoutes);

//Admin
app.use(adminRoutes);


app.listen(8080);
console.log('server is running on 8080')

