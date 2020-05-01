const bcrypt = require("bcrypt");
const Promise = require('bluebird');
const pgclient = require('../db/pgindex');

const BCRYPT_SALT_ROUNDS = parseInt(process.env.BCRYPT_SALT_ROUNDS);

module.exports.UserSchema = {
    'firstName': {
        notEmpty: {
            errorMessage: 'empty'
        }

    },
    'lastName': {
        notEmpty: {
            errorMessage: 'empty'
        }
    },
    'username': {
        notEmpty: {
            errorMessage: 'empty'
        },
        isUsername: {
            errorMessage: 'not_valid_username'
        },
        isLength: {
            options: { min: 5, max: 15 },
            errorMessage: 'length_not_5_to_15'
        }
    },
    'password': {
        notEmpty: {
            errorMessage: 'empty'
        },
        isLength: {
            options: { min: 6, max: 20 },
            errorMessage: 'length_not_6_to_20'
        }
    },
}    
// Creat model 
exports.create = user => {
    let userId = null;
    return new Promise((resolve, reject) => {
        bcrypt.hash(user.password, BCRYPT_SALT_ROUNDS)
            .then(hashedPassword => {
                user.password = hashedPassword;
                pgclient.query(
                    `INSERT INTO users (firstName,lastName,username,password) 
                             VALUES ($1,$2,$3,$4) RETURNING _id`,
                    [user.firstName, user.lastName,user.username, user.password]
                    // ['elham','hasanpour','eli123','12345']
                ).then(
                    function (res) {
                        userId = res.rows[0]._id;
                    },
                    function (err) {
                       
                        console.log(err);
                        
                        reject(err);
                    }
                )
            })
            .catch(err => {
                reject(err);
            });
    });
};