const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://arpiegrover:Arpie1996@picluster.u3qwjlc.mongodb.net/SmartSpace?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true ,ssl: true});

async function connectDB() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    console.log('Connected to MongoDB');

    // Return the db object
    return client.db('SmartSpace');

  } catch (e) {
    console.error(`Failed to connect to MongoDB ${e}`);
  }
}

module.exports = { connectDB };
