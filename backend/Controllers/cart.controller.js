require("dotenv").config();
const bcrypt = require("bcrypt");
const { CartModel } = require("../Models/user.model")


// adding to cart
async function AddToCart(req, res) {
    const payload = req.body;
    try {
        let cartProduct = new CartModel(payload);
        await cartProduct.save();
        res.status(200).send({ "message": "Product added successfully in cart" });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
}

// remove to cart
async function RemoveFromCart(req, res) {
    const { id } = req.body;
    try {
        await CartModel.findByIdAndRemove({ _id: id });
        res.status(200).send({ message: " cart product is removed" });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
}

// get cart
async function GetCart(req, res) {
    let { user } = req.body;
    try {
        let cartProducts = await CartModel.find({ user });
        res.status(200).send({ message: "cart products fetched successfully", cartProducts });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
}

// get cart total
async function CartTotal(req, res) {
    const { user } = req.body;
    try {
        let cartProducts = await CartModel.find({ user });
        let total = 0;
        cartProducts.forEach((p) => {
            total += p.price * p.quantity;
        });
        res.status(200).send({ total });

    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
}


// update cart
async function UpdateCart(req, res) {
    const { _id, ...payload } = req.body;
    try {
        let cart = await CartModel.findOne({ _id });
        Object.assign(cart, payload);
        await cart.save();
        return res.status(201).json({ message: 'cart quantity has been updated' })
    } catch (error) {
        console.log(error);
        return res.status(201).json({ error: error.message })
    }
}


// order suceess

async function PlaceOrder(req, res) {
    const { _id, ...payload } = req.body;
    try {
        let cart = await CartModel.findOne({ _id });
        Object.assign(cart, payload);
        await cart.save();
        return res.status(201).json({ message: 'cart quantity has been updated' })
    } catch (error) {
        console.log(error);
        return res.status(201).json({ error: error.message })
    }
}


// on order placing

async function placeOrder(req, res) {
    const user = req.body.user;
    try {
        const cartItems = await CartModel.find({ user: user });

        // create array of items to insert into success order
        const items = cartItems.map(cartItem => ({ ...cartItem }));

        // insert items into success order
        await orderModel.insertMany({ user, items });

        // remove cart items
        await CartModel.deleteMany({ user });
        res.status(200).send({ message: 'Order placed successfully' });

    } catch (error) {
        console.log(error);
        res.status(400).send(error.message);
    }
}


module.exports = {
    AddToCart,
    RemoveFromCart,
    GetCart,
    CartTotal,
    UpdateCart,
    placeOrder
}
