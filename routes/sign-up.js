// Sign UP
const userModels = require('../models/users');

const express = require('express')


const router = express.Router()



router.post('/sign-up',
    (req, res, next) => {

        
        return userModels.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username:req.body.username,
            password: req.body.password
        })
            .then(result => {
                console.log(result);

                return next();

            })
            .catch(err => {
                next(err);

            }),
            res.status(200).end();


    })

    module.exports=router;
