require("dotenv").config();
const { CartModel, AddressModel } = require("../Models/user.model")


// adding to cart
async function AddToCart(req, res) {
    let id = req.body.productID;
    try {
        let isExists = await CartModel.findOne({ productID: id });
        if (isExists) return res.status(201).send({ status: 201, "message": "Product already exists in cart" });
        let cartProduct = new CartModel(req.body);
        await cartProduct.save();
        res.status(200).send({ "message": "Product added successfully in cart", cartProduct });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
}

// remove to cart
async function RemoveFromCart(req, res) {
    const { id, user } = req.body;
    try {
        await CartModel.findByIdAndRemove({ _id: id });
        const cartProducts = await CartModel.find({ user });
        res.status(200).send({ message: "cart product is removed", cartProducts });
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
        res.status(200).send({ message: "total is updated", total });

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

// adding addresss to db
async function AddAddress(req, res) {
    const payload = req.body;
    try {
        let address = new AddressModel(payload);
        await address.save();
        res.status(200).send({ "message": "address added successfully in cart" });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
}

// getting address dfrom db
async function GetAddress(req, res) {
    let { user } = req.body;
    try {
        let address = await AddressModel.find({ user });
        res.status(200).send({ message: "cart products fetched successfully", address });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
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
        res.status(200).send({ message: 'Order placed successfully', orderItems: cartItems });

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
    placeOrder,
    AddAddress,
    GetAddress
}
