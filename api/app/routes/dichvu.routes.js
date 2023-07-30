const controller = require("../controllers/dichvu.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/dichvu/post", controller.post);

  app.get("/api/dichvu/getAll", controller.getAll);

  app.delete("/api/dichvu/deleteByCode/:code", controller.deleteByCode);

  app.put("/api/dichvu/update/:id", controller.update);
};