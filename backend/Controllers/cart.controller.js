require("dotenv").config();
const OrderModel = require("../Models/order.model");
const { CartModel, AddressModel } = require("../Models/user.model")

// calculating total cart price
const cartTotal = (products) => {
    let total = 0;
    products.forEach((p) => {
        total += p.price * p.quantity;
    });
    return total;
}

// adding to cart
async function AddToCart(req, res) {
    let { productID, user } = req.body;

    try {
        let isExists = await CartModel.findOne({ productID, user });
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
    const { user } = req.body;
    let id = req.params.id;
    try {
        await CartModel.findByIdAndRemove({ _id: id });
        const cartProducts = await CartModel.find({ user });
        let total = cartTotal(cartProducts);
        res.status(200).send({ message: "cart product is removed", cartProducts, total });
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
        let total = cartTotal(cartProducts);
        res.status(200).send({ message: "cart products fetched successfully", cartProducts, total });
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
        let total = cartTotal(cartProducts);
        res.status(200).send({ message: "total is updated", total });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
}


// update cart
async function UpdateCart(req, res) {
    const { user } = req.body;
    let id = req.params.id;
    try {
        await CartModel.findByIdAndUpdate({ _id: id }, req.body);
        let cartProducts = await CartModel.find({ user });
        let total = cartTotal(cartProducts);
        return res.status(201).json({ message: 'cart quantity has been updated', cartProducts, total })
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
        res.status(200).send({ "message": "Address added successfully", address });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
}

// getting address dfrom db
async function GetAddress(req, res) {
    let { user } = req.body;
    try {
        let addresses = await AddressModel.find({ user });
        res.status(200).send({ message: "cart products fetched successfully", addresses });
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
        await OrderModel.insertMany({ user, items });

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
