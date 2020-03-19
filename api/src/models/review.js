const mongoose = require("mongoose");

const Review = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  rating: { type: Number, required: true },
  difficulty: {type: Number, required: true },
  instructor: { type: String, required: true },
  grade: { type: String }
});

module.exports = mongoose.model("Review", Review);
