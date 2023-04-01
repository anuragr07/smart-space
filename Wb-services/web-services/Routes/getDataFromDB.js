const { connectDB } = require('./connectDB');

async function getDataFromDB() {
  try {
    // Connect to the MongoDB cluster
    const db = await connectDB();

    // Fetch data from the database
    const data = await db.collection('Profile').findOne();
    console.log(data);

    // Return the fetched data
    return data;

  } catch (e) {
    console.error(`Failed to fetch data from MongoDB ${e}`);
  }
}

module.exports = { getDataFromDB };