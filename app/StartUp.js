//run this file on boot
const conn = require("./config/conn");
const fs = require("fs")
const path = require('path')
const location = "./maturaData"

// function ReadJSONFiles(){
//     const jsonsInDir = fs.readdirSync(location)
  
//     // allJSONData = []
  
//           return jsonsInDir.forEach(file => {
//               const fileData = fs.readFileSync(path.join(location, file));
//               const json = JSON.parse(fileData.toString());
  
//               return json
//               //ugly hack
//             });
    
//    return allJSONData;
// }
//TODO fix this

function ReadJSONFile(){
    const fileData = fs.readFileSync("./maturaData/all.json")
    const json = JSON.parse(fileData.toString());
    return json
}

module.exports = {
    StartUp: () =>{
        conn.db.collection("maturaData").insertMany(ReadJSONFile()).then(() => {
            console.log("inserted");
        }).catch((e) => {
            console.log("error", e)
        });
    }
}
