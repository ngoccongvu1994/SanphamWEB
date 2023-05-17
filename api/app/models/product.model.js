const mongoose = require('mongoose');

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    category_id: String
  })
);
module.exports = Product;
