const express = require("express");
const router = express.Router();
const { errorWrap } = require("../middleware");
const Course = require("../models/course");

router.get(
  "/:title",
  errorWrap(async (req, res) => {
    const { title } = req.params;
    const course = await Course.find(title);
    if (course === null) {
      res.status(400).json({
        code: 400,
        message: `Cannot find course ${title}`,
        success: false,
        result: null
      });
    }
    res.json({
      code: 200,
      message: `Successfully found course ${title}`,
      success: true,
      result: course
    });
  })
);

router.post(
  "/",
  errorWrap(async (req, res) => {
    const newCourse = new Course(req.body);
    await newCourse.save();
    res.status(201).json({
      code: 201,
      message: `Successfully created new course ${newCourse.id}`,
      success: true,
      result: newCourse
    });
  })
);

router.put(
  "/:id",
  errorWrap(async (req, res) => {
    const { id } = req.params;
    const updatedCourse = await Course.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });
    res.json({
      code: 200,
      message: `Successfully updated course ${id}`,
      success: true,
      result: updatedCourse
    });
  })
);

module.exports = router;
