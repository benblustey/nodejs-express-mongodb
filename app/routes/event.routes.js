const { verifyEvents } = require("../middlewares")
const controller = require("../controllers/events.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  // GET ALL EVENTS
  app.get("/api/event/all", controller.allEvents);

  // GET AN EVENT
  app.get("/api/event/:id", controller.singleEvent);

  
  // ADD AN EVENT
  app.post("/api/event/add", 
    [ verifyEvents.checkDuplicateEvents ], 
    controller.addEvents
  );

  // UPDATE AN EVENT
  app.put("/api/event/update/:id", controller.updateEvent);

  // DELETE AN EVENT
  app.delete("/api/event/delete/:id", controller.deleteOneEvent);
};
