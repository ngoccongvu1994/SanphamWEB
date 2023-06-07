const controller = require("../controllers/introduce.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/introduce/post", controller.post);

  app.get("/api/introduce/getAll", controller.getAll);

  app.delete("/api/introduce/delete/:id", controller.delete);

  app.put("/api/introduce/update/:id", controller.update);
};