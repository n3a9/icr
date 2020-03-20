const mongoose = require("mongoose");
const Review = require("./review");

const Course = new mongoose.Schema({
  title: { type: String, required: true },
  reviews: { type: [Review], default: [] },
  rating: { type: Number, required: true }
});

module.exports = mongoose.model("Course", Course);
