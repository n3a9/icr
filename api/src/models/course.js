const mongoose = require("mongoose");

const Review = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  rating: { type: Number, required: true },
  difficulty: { type: Number, required: true },
  instructor: { type: String },
  grade: { type: String }
});

const Course = new mongoose.Schema({
  title: { type: String, required: true },
  reviews: { type: [Review], default: [] },
  rating: { type: Number, required: true }
  difficulty: { type: Number, required: true }
});

module.exports = mongoose.model("Course", Course);
