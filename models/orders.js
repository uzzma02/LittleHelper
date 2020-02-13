const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    customer: {
        type: Schema.ObjectId,
        ref: 'customer',
        required:  true
    },
    helper: {
        type: Schema.ObjectId,
        ref: 'helper',
        required: true
    },
    service: {
        type: Schema.ObjectId,
        ref: 'service',
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comments: {
        type: String,
        required: true

    }
})

const OrderModel = mongoose.model('order', OrderSchema);
module.exports = OrderModel;