const express = require('express');
const conn = require('../config/conn');

const YearAndSessionRouts = express.Router();

//localhost:8080/YearAndSession/GetByYearAndSession?year=1&session=2
YearAndSessionRouts.route("/GetByYearAndSession").get(async function (req, res) {
  conn.db
    .collection("maturaData")
      .find({year:parseInt(req.query.year),session:parseInt(req.query.session)})
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching listings!");
       } else {
          res.json(result);
        }
      });

  // res.json(`year = ${req.query.year}, session = ${req.query.session}`)
});

module.exports = YearAndSessionRouts