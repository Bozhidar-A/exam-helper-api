const express = require('express');

const HeartbeatRouts = express.Router();

HeartbeatRouts.route("/").get(async function (req, res) {
    res.json("ITS ALIVE")
  });

module.exports = HeartbeatRouts