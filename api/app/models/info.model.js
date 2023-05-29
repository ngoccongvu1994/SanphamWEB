const mongoose = require('mongoose');

const Info = mongoose.model(
  "Info",
  new mongoose.Schema({
    name: String,
    name_tag: String,
    value: String,
    active: Boolean
  })
);
module.exports = Info;
