const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestimonialSchema = new TestimonialSchema({
    helper: {
        type: Schema.ObjectId,
        ref: 'helper',
        required: true
    },
    order: {
        type: Schema.ObjectId,
        ref: 'order',
        required: true
    },
    customer: {
        type: Schema.ObjectId,
        ref: 'customer',
        required: true
    }
})

const TestimonialModel = mongoose.model('testimonial', TestimonialSchema);
module.exports = TestimonialModel;