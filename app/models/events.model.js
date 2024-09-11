const mongoose = require("mongoose");

const Events = mongoose.model(
  "Events",
  new mongoose.Schema({
    src: String,
    epoch: String,
    date: String,
    friendlyDate: String,
    length: Number,
    starred: Boolean
  })
);

module.exports = Events;
