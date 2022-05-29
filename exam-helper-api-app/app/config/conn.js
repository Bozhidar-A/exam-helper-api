const { MongoClient } = require("mongodb");
const dbConfig = require("./db.config");

const mongodbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

class Mongo {
  constructor() {
    this.client = new MongoClient(dbConfig.url, mongodbOptions);
  }

  async main() {
    await this.client.connect();
    console.log("Connected to MongoDB");

    this.db = this.client.db();
  }
}

module.exports = new Mongo();
