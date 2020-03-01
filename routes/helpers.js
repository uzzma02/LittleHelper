const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


const HelpersModel = require('../models/helpers.js');

//SignUp-"Become a little helper"
router.post(
    '/signup', //http://www.myapp.com/helpers/signup
    (req, res) => {
        const formdata = {
            'firstname' : req.body.firstName,
            'lastname' : req.body.lastName,
            'dob' : req.body.dateOfBirth ,
            'email' : req.body.email,
            'password' : req.body.password,
            'ph' : req.body.phNumber,
            'servicesoffered' : req.body.servicesOffered,
        }

        const theHelperModel = new HelpersModel(formdata);
    
        //Generate the salt for the password
        bcrypt.genSalt(
            (err, salt) => {
                bcrypt.hash(
                    formdata.password,
                    salt,
                    (err, hashedPassword)=>{
                        theHelperModel.password = hashedPassword;
                        theHelperModel.save();
                        res.send("Helper registration complete");
                    }
                )
            }
        )
    }
)

//Login
router.post(
    '/login', //http://www.myapp.com/helpersS/login
    (req, res)=>{
        const formdata = {
            email: req.body.email,
            password: req.body.password
        }
        //1. Check to see if the user exists
        HelpersModel
        .find({email: formdata.email})
        .then((isMatch)=>{
            if(isMatch.length>0) {
                res.send('Email found');
            }
            else {
                res.send('Please check email & password');
            }
        })
    }
)

module.exports=router;

