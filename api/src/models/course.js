const mongoose = require("mongoose");

const Course = new mongoose.Schema({
  title: { type: String, required: true },
  reviews: { type: [String], required: true },
  rating: { type: Number, required: true }
});

module.exports = mongoose.model("Course", Course);
