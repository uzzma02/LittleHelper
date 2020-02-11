const express = require('express');
const app = express();
const mongoose = require('mongoose');

//const HelpersModel = require('./models/helpers.js');

const HelpersModel = require('./routes/helpers.js');

//Connecting to database
const dbUrl = "mongodb+srv://admin:Sep2uzz!@cluster0-fuvbw.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(
    dbUrl,
    {useNewUrlParser: true, useUnifiedTopology: true})
    .then(
        ()=>{
            console.log('db is connected/response form mongoose');
        }
    ).catch(
        (e)=>{
            console.log('no response from mongoose', e);
        }
);

app.use(
    '/helpers',
    HelpersRoutes
)

app.listen(3010, ()=>{
    console.log('You are connected');
})