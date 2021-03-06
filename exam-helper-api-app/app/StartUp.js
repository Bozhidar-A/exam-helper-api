//run this file on boot
const conn = require("./config/conn");
const fs = require("fs");
const path = require("path");
const location = "./maturaData";

function ReadJSONFiles() {
  const jsonsInDir = fs.readdirSync(location);

  allJSONData = [];

  jsonsInDir.forEach((file) => {
    const fileData = fs.readFileSync(path.join(location, file));
    const json = JSON.parse(fileData.toString());

    json.map((e) => {
      allJSONData.push(e);
    });
  });

  ID = 1;
  for (let index = 0; index < allJSONData.length; index++) {
    allJSONData[index]["id"] = ID;
    ID++;
  }

  return allJSONData;
}

module.exports = {
  StartUp: () => {
    conn.db
      .collection("maturaData")
      .insertMany(ReadJSONFiles())
      .then(() => {
        console.log("inserted");
      })
      .catch((e) => {
        console.log("error", e);
      });
  },
};
