const { verifyEvents } = require("../middlewares")
const controller = require("../controllers/events.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  // GET ALL EVENT
  app.get("/api/event/all", controller.allEvents);

  // ADD AN EVENT
  app.post("/api/event/add", 
    [ verifyEvents.checkDuplicateEvents ], 
    controller.addEvents
  );
  // UPDATE AND EVENT
  app.post("/api/event/update/:id", controller.updateEvent);
};
