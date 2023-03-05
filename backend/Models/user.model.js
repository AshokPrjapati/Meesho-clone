const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config();


// user schema for user details 
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        immutable: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        default: ''
    },
    gender: {
        type: String
    },
    photoURL: {
        type: String,
        default: ''
    },
    phoneNumber: {
        type: Number,
        default: 0,
    },
    role: {
        type: String,
        default: "USER",
        enum: ["USER", "ADMIN"]
    },
    isCoupanApplied: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Number,
        immutable: true,
        default: () => Date.now()
    },
    lastLogin: {
        type: Number,
        default: () => Date.now()
    },
    token: {
        type: String
    }
});


// review schema
const reviewSchema = new mongoose.Schema({
    rate: {
        type: Number,
        required: true
    },
    count: {
        type: Number,
        required: true
    }
});

// cart schema for products details

const cartSchema = new mongoose.Schema({
    productID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
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
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    }
});


// address schema for user
const addressSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    house: {
        type: String,
    },
    road: {
        type: String,
        required: true
    },
    pin: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    nearby: {
        type: String,
    },
    selected: {
        type: Boolean,
        default: false
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }
})


userSchema.methods.getAuthorizationToken = async function () {
    const token = jwt.sign({ user: this._id, email: this.email }, process.env.SECRET_KEY);
    this.token = token;
    await this.save();
    return token;
}


const UserModel = mongoose.model('user', userSchema);
const CartModel = mongoose.model('cart', cartSchema);
const AddressModel = mongoose.model('address', addressSchema);

module.exports = { UserModel, CartModel, AddressModel };