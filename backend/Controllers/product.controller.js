require("dotenv").config();
const { ProductModel } = require("../Models/product.model");


// adding to cart
async function AddProduct(req, res) {
    const payload = req.body;
    try {
        let product = new ProductModel(payload);
        await product.save();
        res.status(200).send({ "message": "Product added successfully in DB", product });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
}

async function AddManyProduct(req, res) {
    const payload = req.body;
    try {
        let product = await ProductModel.insertMany(payload);
        res.status(200).send({ "message": "Products added successfully in DB", product });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
}

// remove from database
async function RemoveProduct(req, res) {
    const id = req.params.id;
    try {
        await ProductModel.findByIdAndRemove({ _id: id });
        res.status(200).send({ message: " Product is removed from DB" });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
}

// get all products
async function GetAllProducts(req, res) {
    try {
        let products = await ProductModel.find();
        res.status(200).send({ message: "All products fetched successfully", products });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
}

// get category wise product


async function GetProducts(req, res) {
    const { category } = req.query;
    try {
        let products = await ProductModel.find({ category });
        res.status(200).send({ message: `${category} products fetched successfully`, products });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
}

// get single product

async function GetSingleProducts(req, res) {
    const id = req.params.id;
    try {
        let product = await ProductModel.findOne({ _id: id });
        res.status(200).send({ message: "Single products fetched successfully", product });
    } catch (error) {
        console.log(error);
        res.status(400).send({ message: error.message });
    }
}

// update product
async function UpdateProduct(req, res) {
    const id = req.params.id;
    const payload = req.body;
    try {
        await ProductModel.findByIdAndUpdate({ _id: id }, payload);
        return res.status(201).json({ message: 'Product is updated' })
    } catch (error) {
        console.log(error);
        return res.status(201).json({ error: error.message })
    }
}

// update all products with the old category to the new category

async function updateProductsCategory(req, res) {
    try {
        const { oldCategory, newCategory } = req.body;


        const result = await ProductModel.updateMany(
            { category: oldCategory },
            { $set: { category: newCategory } }
        );

        res.status(200).json({ message: `${result.nModified} products updated` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


module.exports = {
    AddProduct,
    RemoveProduct,
    GetAllProducts,
    UpdateProduct,
    AddManyProduct,
    GetProducts,
    GetSingleProducts,
    updateProductsCategory
}
