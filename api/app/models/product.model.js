const mongoose = require('mongoose');

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    category: String,
    image: String,
  })
);
module.exports = Product;
