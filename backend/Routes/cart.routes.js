const express = require("express");
const CartRouter = express.Router();
const cart_controller = require("../Controllers/cart.controller");


CartRouter.post("/add", cart_controller.AddToCart);

CartRouter.delete("/remove/:id", cart_controller.RemoveFromCart);

CartRouter.get("/getcart", cart_controller.GetCart);

CartRouter.patch("/update/:id", cart_controller.UpdateCart);

CartRouter.get("/carttotal", cart_controller.CartTotal);

CartRouter.post("/addaddress", cart_controller.AddAddress);

CartRouter.get("/getaddress", cart_controller.GetAddress);

CartRouter.get("/order", cart_controller.placeOrder);

module.exports = CartRouter;