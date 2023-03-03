const express = require("express");
const CartRouter = express.Router();
const cart_controller = require("../Controllers/cart.controller");


CartRouter.post("/add", cart_controller.AddToCart);

CartRouter.post("/remove", cart_controller.RemoveFromCart);

CartRouter.get("/getcart", cart_controller.GetCart);

CartRouter.post("/update", cart_controller.UpdateCart);

CartRouter.get("/carttotal", cart_controller.CartTotal);

CartRouter.get("/addaddress", cart_controller.AddAddress);

CartRouter.get("/getaddress", cart_controller.GetAddress);

CartRouter.post("/order", cart_controller.placeOrder);

module.exports = CartRouter;