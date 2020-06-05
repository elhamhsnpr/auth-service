const JWT = require('../utils/jwt');
const pgcleint = require('../db/pgindex');

const express = require('express')


const router = express.Router()


//Get user's Information
router.get('/getInfo',

    JWT.verifyToken,

    (req, res, next) => {


        pgcleint.query('SELECT * FROM users WHERE _id=$1', [req.token.id])
            .then(result => {

                res.json(result.rows[0])
            }


            ).catch(err => next(err));


        // res.status(200).end();

    });

//Edit user's Information   
router.put('/editInfo',

    JWT.verifyToken,

    (req, res, next) => {
        

        pgcleint.query('UPDATE users SET firstName=$1,lastName=$2, username=$3 WHERE _id=$4;',
            [req.body.firstName, req.body.lastName, req.body.username, req.token.id])
            .then(result => {

                res.json("Update");
            })
            .catch(err => next(err));

    });

//Delete User
router.delete('/delete',

    JWT.verifyToken,

    (req, res,next) => {

        

        pgcleint.query('DELETE FROM users WHERE _id=$1;', [req.token.id])
            .then(result => {

                res.json("User Deleted")

            })
            .catch(err => next(err));
    });

module.exports = router;
