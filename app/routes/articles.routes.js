const controller = require("../controllers/articles.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  // GET ALL ARTICLES
  app.get("/api/articles/all", controller.allArticles);
  // // ADD AN ARTICLES
  // app.post("/api/article/add", controller.addEvents);
  // // UPDATE AND ARTICLES
  // app.post("/api/article/update/:id", controller.updateEvent);
};
