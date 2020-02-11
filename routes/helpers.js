const express = require('express');
const router = express.Router();
//const bcrypt = require('bcrypt');

const HelpersModel = require('../models/helpers.js');

router.post(
    '/register',
    (req, res) => {
        const formdata = {
            'firstname' : req.body.firstName,
            'lastname' : req.body.lastName,
            'dob' : req.body.dateOfBirth ,
            'email' : req.body.email,
            'ph' : req.body.phNumber,
            'openorders' :req.body.openOrders,
            'fulfilledorders' : req.body.fulfilledOrders,
            'servicesoffered' : req.body.servicesOffered,
            'rating' : rating,
            'reviews' : reviews
        }
    }
)

module.exports=router;

