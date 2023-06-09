const mongoose = require('mongoose');

const News = mongoose.model(
  "News",
  new mongoose.Schema({
    title: String,
    content: String,
    active: Boolean,
    createDate: Date,
    updateDate: Date,
    imageUrl: String,
    tags: String,

  })
);
module.exports = News;
