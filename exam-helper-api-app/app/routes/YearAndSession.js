const express = require("express");
const conn = require("../config/conn");

const YearAndSessionRouts = express.Router();

//localhost:6868/api_v1/YearAndSession/GetByYearAndSession?year=2020&session=2
YearAndSessionRouts.route("/GetByYearAndSession").get(async function (
  req,
  res
) {
  if (req.query.year === undefined || req.query.session === undefined) {
    res.status(400).send("Provide BOTH year AND session!");
  }

  conn.db
    .collection("maturaData")
    .find({
      year: parseInt(req.query.year),
      session: parseInt(req.query.session),
    })
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching listings!");
      } else {
        res.json(result);
      }
    });
});

YearAndSessionRouts.route("/GetSelectorData").get(async function (req, res) {
  let years = await conn.db.collection("maturaData").distinct("year");
  //get all available years

  //prep array for the data to match old api
  allData = [];

  //interface for the data
  let baseStruct = {
    year: 0,
    sessions: [],
  };

  //loop over the years
  for (const yr of years) {
    //create a temporary and store the year
    let tmp = baseStruct;
    tmp.year = yr;

    //do a distinct for the sessions of that year
    let sessions = await conn.db
      .collection("maturaData")
      .distinct("session", { year: yr });

    //save em as well
    tmp.sessions = sessions;

    //push to the arr
    allData.push(tmp);
  }

  res.json(allData);
});

module.exports = YearAndSessionRouts;
