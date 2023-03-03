const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    items: [{
        productID: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        image: {
            type: String,
            require: true
        },
        title: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        reviews: {
            type: reviewSchema,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            default: 1
        },
    }]
});

const orderModel = mongoose.model('successOrder', successOrderSchema);

module.exports = orderModel;