const { MongoClient } = require('mongodb');

const dbName = "matura_api_db"
const connString = "mongodb://localhost:27017"

const mongodbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

class Mongo {
      constructor () {
          this.client = new MongoClient(`${connString}/${dbName}`, mongodbOptions)
      }
  
      async main () {
          await this.client.connect();
          console.log('Connected to MongoDB');
  
          this.db = this.client.db();
      }
  }
  
  module.exports = new Mongo();