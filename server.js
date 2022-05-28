const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

//load routes
app.use("/YearAndSession", require("./app/routes/YearAndSession"))
app.use("/Heartbeat", require("./app/routes/Heartbeat"))

// const PORT = process.env.NODE_DOCKER_PORT || 8080;
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
