const controller = require("../controllers/info.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/info/post", controller.post);

  app.get("/api/info/getAll", controller.getAll);

  app.delete("/api/info/delete/:id", controller.delete);

  app.put("/api/info/update/:id", controller.update);
};