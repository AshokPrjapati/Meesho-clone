const mongoose = require("mongoose");
require("dotenv").config();


// product schema for products details

const productSchema = new mongoose.Schema({
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
        type: {
            rate: Number,
            count: Number
        },
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const ProductModel = mongoose.model('product', productSchema);

module.exports = { ProductModel };