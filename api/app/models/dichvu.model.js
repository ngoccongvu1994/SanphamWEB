const mongoose = require('mongoose');

const Category = mongoose.model(
  "DichVu",
  new mongoose.Schema({
    name: String,
    description: String,
    code: String,
    parent_id: String,
    level: Number
  })
);
module.exports = Category;
