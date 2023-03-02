require("dotenv").config();
const bcrypt = require("bcrypt");
const { CartModel } = require("../Models/user.model")


// adding to cart
async function AddToCart(req, res) {
    const payload = req.body;
    try {
        let cartProduct = new CartModel.create();
        await cartProduct.save();
    } catch (error) {
        console.log(error);
    }
}

// remove to cart
async function RemoveFromCart(req, res) {

}

// get cart
async function GetCart(req, res) {

}

// get cart total
async function CartTotal(req, res) {

}


// update cart
async function UpdateCart(req, res) {

}
