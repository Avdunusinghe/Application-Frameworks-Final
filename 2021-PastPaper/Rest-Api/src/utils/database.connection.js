const mongoose = require("mongoose");

const databaseConnection = () => {
  const connectionString = process.env.connectionString;
  mongoose.connect(connectionString, () => {
    console.log("Connected TO the Database");
  });
};

module.exports = databaseConnection;
