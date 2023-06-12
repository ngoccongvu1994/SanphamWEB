const controller = require("../controllers/news.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/news/post", controller.post);

  app.get("/api/news/getAll", controller.getAll);

  app.delete("/api/news/delete/:id", controller.delete);

  app.put("/api/news/update/:id", controller.update);

  app.get("/api/news/get/:id", controller.get);
};