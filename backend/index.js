const express = require("express");
const connection = require("./Configs/db")
const app = express();
const cors = require("cors");
const UserRouter = require("./Routes/user.routes");
const CartRouter = require("./Routes/cart.routes");
const authentication = require("./Middleware/authentication.mw");
const ProductRouter = require("./Routes/product.routes");
const adminAuthentication = require("./Middleware/adminAuthentication.md");
require("dotenv").config();

app.use(cors())

app.use(express.json());

app.use("/user", UserRouter);

app.use("/product", adminAuthentication, ProductRouter);

app.use("/cart", authentication, CartRouter);

app.get("*", (req, res) => {
    res.status(404).json("not found")
})

const port = process.env.PORT || 8080
app.listen(port, async () => {
    try {
        await connection;
        console.log("connected to mongoDb");
    } catch (error) {
        console.log(error);
    }
    console.log(`server is running at port: ${port}`);
})