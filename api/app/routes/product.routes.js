const controller = require("../controllers/product.controller");
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/product/post", upload.single('image'), controller.post);

  app.get("/api/product/getAll", controller.getAll);

  // app.get("/api/auth/getAll", controller.get);
};