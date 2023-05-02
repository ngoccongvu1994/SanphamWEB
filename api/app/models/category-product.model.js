const mongoose = require('mongoose');

const Category = mongoose.model(
  "Category",
  new mongoose.Schema({
    name: String,
    description: String,
    code: String,
    parent_id: String,
    level: Number
  })
);
module.exports = Category;
