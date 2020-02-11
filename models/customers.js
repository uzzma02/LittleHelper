const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
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
    }
})

const CustomersModel = mongoose.model('customer',CustomerSchema);
module.exports = CustomersModel;