const express = require("express");
const ProductRouter = express.Router();
const product_controller = require("../Controllers/product.controller");


ProductRouter.post("/add", product_controller.AddProduct);

ProductRouter.post("/addmany", product_controller.AddManyProduct);

ProductRouter.delete("/remove/:id", product_controller.RemoveProduct);

ProductRouter.get("/getall", product_controller.GetAllProducts);

ProductRouter.get("/singleproduct/:id", product_controller.GetSingleProducts);

ProductRouter.get("/getproducts", product_controller.GetProducts);

ProductRouter.patch("/update/:id", product_controller.UpdateProduct);

ProductRouter.patch("/updatecategory", product_controller.updateProductsCategory);

module.exports = ProductRouter;