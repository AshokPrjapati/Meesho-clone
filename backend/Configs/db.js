const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set('strictQuery', false);

// creating connection to server using mongoose
const connection = mongoose.connect(process.env.DB_URL);

module.exports = connection;