const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.product = require("./product.model");
db.category = require("./category-product.model");
db.info = require("./info.model");
db.intro = require("./introduce.model");
db.ROLES = ["user", "admin", "moderator"];

module.exports = db;