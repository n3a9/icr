const express = require("express");
const router = express.Router();
const { errorWrap } = require("../middleware");
const Course = require("../models/course");

router.get(
  "/:id",
  errorWrap(async (req, res) => {
    const { id } = req.params;
    const course = await Course.findById(id);
    if (course === null) {
      res.status(400).json({
        code: 400,
        message: `Cannot find course ${id}`,
        success: false,
        result: null
      });
    }
    res.json({
      code: 200,
      message: `Successfully found course ${id}`,
      success: true,
      result: course
    });
  })
);

module.exports = router;
