const mongoose = require('mongoose');

const Category = mongoose.model(
  "Category",
  new mongoose.Schema({
    name: String,
    description: String,
    code: String,
    parent: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
      }
    ],
    level: Number
  })
);
module.exports = Product;
