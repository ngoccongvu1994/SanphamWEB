const mongoose = require('mongoose');

const Introduce = mongoose.model(
  "Introduce",
  new mongoose.Schema({
    title: String,
    content: String,
    active: Boolean,
    createDate: Date,
    updateDate: Date,
  })
);
module.exports = Introduce;
