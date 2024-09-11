const db = require("../models");
const Events = db.events;

checkDuplicateEvents = (req, res, next) => {
  // Epoch TimeID
  Events.findOne({
    src: req.body.src
  }).exec((err, event) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (event) {
      res.send({ message: "Failed! Event has already been created!" });
      return;
    }
    next();
  });
};

const verifyEvents = {
  checkDuplicateEvents
};

module.exports = verifyEvents;
