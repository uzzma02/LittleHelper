const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ServicesSchema = new Schema ({
    serviceName: {
        type: String
    },
    category: {
        type: String
    },
    city: {
        type: String
    }
})

const ServicesModel = mongoose.model('service', ServicesSchema);
module.exports=ServicesModel;