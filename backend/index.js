const express = require("express");
const  connection  = require("./Configs/db")
const app = express();
require("dotenv").config();



const port = process.env.PORT || 8080
app.listen(port, async()=>{
    try {
        await connection;
        console.log("connected to mongoDb");
    } catch (error) {
        console.log(error);
    }
    console.log(`server is running at port: ${port}`);
})