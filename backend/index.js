const express = require("express");
const connection = require("./Configs/db")
const app = express();
const cors = require("cors");
const { UserRouter } = require("./Routes/user.routes");
require("dotenv").config();

app.use(cors())

app.use(express.json());

app.use("/user", UserRouter);

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