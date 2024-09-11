const db = require("../models");
const Events = db.events;

exports.allEvents = (req, res) => {
  Events.find({}, function(err, event) {
    res.send(event)
  })
};

exports.updateEvent = (req, res) => {
  res.status(200).send('Updating Event');
}

exports.addEvents = (req, res) => {
  const events = new Events({
    src: req.body.src,
    epoch: req.body.epoch,
    date: req.body.date,
    friendlyDate: req.body.friendlyDate,
    length: req.body.length,
    starred: req.body.starred
  });

  events.save((err, events) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "Event was created successfully!" });
    // Events.findOne({ src: "user" }, (err) => {
    //   if (err) {
    //     res.status(500).send({ message: err });
    //     return;
    //   }
    //   events.save(err => {
    //     if (err) {
    //       res.status(500).send({ message: err });
    //       return;
    //     }

    //     res.send({ message: "Event was created successfully!" });
    //   });
    // });
  })
}
