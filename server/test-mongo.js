const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const { MongoClient } = require("mongodb");
const uri = DATABASE_URL; // Replace with your MongoDB connection string
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to server");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
