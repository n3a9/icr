const express = require("express");

const router = express.Router();
const { course } = require("../api");

router.use("/api/courses", course);

module.exports = router;
