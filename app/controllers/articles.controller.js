const db = require("../models");
const Articles = db.articles;

exports.allArticles = (req, res) => {
  Articles.find({}, function(err, article) {
    res.send(article)
  })
};

exports.updateEvent = (req, res) => {
  res.status(200).send('Updating Event');
}

exports.addEvents = (req, res) => {
  const events = new Events({
    title: req.body.title,
    content: req.body.content,
    url: req.body.url
  });

  events.save((err, events) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.send({ message: "Event was created successfully!" });
  })
}
