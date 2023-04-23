const controller = require("../controllers/product.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/product/post", controller.post);

  app.get("/api/product/getAll", controller.getAll);

  // app.get("/api/auth/getAll", controller.get);
};