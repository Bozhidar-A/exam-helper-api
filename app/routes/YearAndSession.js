const express = require('express');

const YearAndSessionRouts = express.Router();

YearAndSessionRouts.route("/:year&:session").get(async function (req, res) {
    res.json("route works")
  });

module.exports = YearAndSessionRouts