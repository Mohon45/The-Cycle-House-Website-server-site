const {
  getProductsServices,
  createProductServices,
  getSingleProductServices,
} = require("../services/product.services");

exports.getProducts = async (req, res) => {
  try {
    const products = await getProductsServices();

    res.status(200).json({
      status: "success",
      products,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't find product",
      error: error,
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const product = await createProductServices(req.body);

    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't add a product",
      error: error,
    });
  }
};
exports.getSingleProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await getSingleProductServices(id);

    res.status(200).json({
      status: "success",
      product,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "can't add a product",
      error: error,
    });
  }
};
