const controller = require("../controllers/category-product.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/category/post", controller.post);

  app.get("/api/category/getAll", controller.getAll);

  app.delete("/api/category/deleteByCode/:code", controller.deleteByCode);

  app.put("/api/category/update/:id", controller.update);
};