const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    customer: {
        type: CustomerSchema.Types.ObjectId,
        required:  true
    },
    helper: {
        type: HelperSchema.Types.ObjectId,
        required: true
    },
    service: {
        type: ServicesSchema.Types.ObjectId,
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