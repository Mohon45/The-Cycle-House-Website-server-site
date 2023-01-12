const Product = require("../models/Products");

exports.getProductsServices = async () => {
  const products = await Product.find({});
  return products;
};

exports.createProductServices = async (data) => {
  const product = await Product.create(data);
  return product;
};
exports.getSingleProductServices = async (id) => {
  const product = await Product.findOne({ _id: id });
  return product;
};
