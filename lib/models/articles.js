const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 3,
    max: 255,
  },
  titleUrl: {
    type: String,
  },
  id: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  body: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Article", articleSchema);
