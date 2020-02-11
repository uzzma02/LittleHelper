const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestimonialSchema = new TestimonialSchema({
    helper: {
        type: HelperSchema.Types.ObjectId,
        required: true
    },
    order: {
        type: OrderSchema.Types.ObjectId,
        required: true
    },
    customer: {
        type: CustomerSchema.Types.ObjectId,
        required: true
    }
})

const TestimonialModel = mongoose.model('testimonial', TestimonialSchema);
module.exports = TestimonialModel;