const express = require("express");
const cors = require("cors");
const conn = require("./app/config/conn");
const StartUp = require("./app/StartUp");

const app = express();

const boot = async () => {
  await conn.main();

  //matura_api_db
  let count = await conn.db.collection("maturaData").countDocuments();

  if (count === 0) {
    //no documents in collection
    //fill it up

    console.log("DB empty, fill it up");
    StartUp.StartUp();
  }

  var corsOptions = {
    origin: "http://localhost:8081",
  };

  app.use(cors(corsOptions));

  // parse requests of content-type - application/json
  app.use(express.json());

  //load routes
  app.use("/YearAndSession", require("./app/routes/YearAndSession"));
  app.use("/Heartbeat", require("./app/routes/Heartbeat"));

  const PORT = process.env.NODE_DOCKER_PORT || 8080;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
};

boot();
