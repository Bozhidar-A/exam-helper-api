const express = require("express");

const HeartbeatRouts = express.Router();

//localhost:6868/api_v1/Heartbeat
HeartbeatRouts.route("/").get(async function (req, res) {
  res.status(200).send({ status: "200 OK" });
});

module.exports = HeartbeatRouts;
