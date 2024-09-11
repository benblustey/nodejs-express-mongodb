const mongoose = require("mongoose");

const Articles = mongoose.model(
  "Articles",
  new mongoose.Schema({
    title: String,
    content: String,
    url: String
  })
);

module.exports = Articles;
