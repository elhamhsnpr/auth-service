const JWT = require('../utils/jwt');

const express = require('express')


const router = express.Router()

//Autorizition
router.post('/authUser',
    JWT.verifyToken,
    (req, res) => {

        res.json('You Are Authorize To Access This API')

    
    })

module.exports = router;
