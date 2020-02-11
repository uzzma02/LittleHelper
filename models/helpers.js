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
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phNumber: {
        type: String,
        required: true
    },
    openOrders: {
        type: Array,
        required: true
    },
    fulfilledOrders: {
        type: Array,
        required: true
    },
    servicesOffered: {
        type: Array,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    reviews: {
        type: Array,
        required: true
    }
})

const HelpersModel = mongoose.model('helper', HelperSchema);
module.exports = HelpersModel;
