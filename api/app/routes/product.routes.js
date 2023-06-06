const controller = require("../controllers/product.controller");
const PathConfig = require("../config/path.config");
const multer = require('multer');
const path = require('path');
const fs = require('fs');
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname,PathConfig.pathProduct)); 
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname); // Tạo tên tệp duy nhất bằng cách kết hợp thời gian và tên gốc của tệp
    }
  });
  const upload = multer({ 
    storage: storage,
  });
  app.post("/api/product/post", upload.single('image'), controller.post);

  app.get("/api/product/getAll", controller.getAll);

  app.delete("/api/product/deleteByCode/:id", controller.deleteById);

  app.put("/api/product/update/:id", controller.update);

  app.get("/api/product/get/:id", controller.get);
};