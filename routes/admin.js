const JWT = require('../utils/jwt');
const pgcleint = require('../db/pgconnect');
const userModels = require('../models/users');

const express = require('express')


const router = express.Router()

//Admin Get Users Information
router.get('/admin/getInfo',

    JWT.verifyToken,

    (req, res, next) => {

        if (req.token.type == 'admin') {

            pgcleint.query('SELECT * FROM users WHERE _id=$1;', [req.body.id])
                .then(result => {

                    res.json(result.rows[0]);

                })
                .catch(err => next(err));


        }
    });

//Admin Add User
router.post('/admin/Add',

    JWT.verifyToken,

    (req, res, next) => {

        if (req.token.type == 'admin') {

            return userModels.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                username: req.body.username,
                password: req.body.password,
                userType: req.body.userType

            })
                .then(result => {

                    console.log(result);
                    res.json(result)


                })
                .catch(err => {
                    next(err);

                }),

                res.status(200).end()

        }
    });

//Admin Delete User
router.delete('/admin/delete',

    JWT.verifyToken,

    (req, res, next) => {

        if (req.token.type == 'admin') {

            pgcleint.query('DELETE FROM users WHERE _id=$1;', [req.body.id])
                .then(result => {

                    res.json("User Deleted")

                })
                .catch(err => next(err));
        }

    });

//Admin Edit UserInfo
router.put('/admin/edit',

    JWT.verifyToken,

    (req, res, next) => {

        if (req.token.type == 'admin') {

            pgcleint.query('UPDATE users SET firstName=$1,lastName=$2, username=$3 WHERE _id=$4;',
                [req.body.firstName, req.body.lastName, req.body.username, req.body.id])
                .then(result => {

                    res.json("Update");
                })
                .catch(err => next(err));

        }
    });



module.exports = router;