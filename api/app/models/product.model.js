const mongoose = require('mongoose');

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    category_id: String,
    active: Boolean,
    createDate: Date,
    updateDate: Date
  })
);
module.exports = Product;
