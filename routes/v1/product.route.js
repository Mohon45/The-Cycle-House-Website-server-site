const express = require("express");
const productController = require("../../controllers/product.controller");

const router = express.Router();

router.route("/products").get(productController.getProducts);
router.route("/product").post(productController.createProduct);
router.route("/singleProduct/:id").get(productController.getSingleProduct);

module.exports = router;
