const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const HelperSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    phNumber: {
        type: Number,
        required: true
    },
    /*openOrders: {
        type: Array,
        required: true
    },
    fulfilledOrders: {
        type: Array,
        required: true
    },*/
    servicesOffered: {
        type: Array,
        required: true
    }/*,
    rating: {
        type: Number,
        required: true
    },
    reviews: {
        type: Array,
        required: true
    }*/
})

const helpersModel = mongoose.model('helper', HelperSchema);
module.exports = helpersModel;
