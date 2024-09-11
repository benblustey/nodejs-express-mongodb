const db = require("../models");
const Events = db.events;

exports.allEvents = (req, res) => {
  Events.find({}, function(err, event) {
    res.send(event)
  })
};

exports.singleEvent = (req, res) => {
  Events.findOne({epoch: req.params.id}, function(err, result) {
    if(err) {
      console.log(err)
    }
    if(!result) {
      res.status(400).send('No record found!');
      return;
    } else {
      res.status(200).send(result);
    }
  });
};

exports.updateEvent = (req, res) => {
  const update = req.body;
  Events.findOneAndUpdate({epoch: req.params.id}, req.body, function (err, result) {
    if(err) {
      console.log(err);
    }
    if(!result) {
      res.status(400).send('No record found!');
      return;
    } else {
      res.status(200).send('Record has been updated!')
    }
  });
}

exports.deleteOneEvent = (req, res) => {
  Events.findOneAndDelete({epoch: req.params.id}, function(err, result) {
    if(err) console.log(err);
    if(!result) {
      res.status(400).send('No record found!');
      return;
    }
    res.status(200).send('Record has been deleted!')
  })
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
      console.log(err)
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
