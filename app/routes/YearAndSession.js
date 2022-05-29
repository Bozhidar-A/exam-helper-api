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
});

YearAndSessionRouts.route("/GetSelectorData").get(async function (req, res) {
  let years = await conn.db
    .collection("maturaData")
      .distinct("year")

  allData = [];

  let baseStruct = {
    year:0,
    sessions:[]
  }

  for (const yr of years){
    let tmp = baseStruct;
    tmp.year = yr;

    let sessions = await conn.db
    .collection("maturaData")
    .distinct("session", {year:yr})

    tmp.sessions = sessions;

    allData.push(tmp)
  }

  res.json(allData)
});

module.exports = YearAndSessionRouts