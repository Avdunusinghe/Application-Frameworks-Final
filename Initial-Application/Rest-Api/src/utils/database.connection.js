const mongoose = require("mongoose");

const databaseConnection = ()=>{
    const connectionString = process.env.connectionString;
    mongoose.connect(connectionString,()=>{
        console.log("Connect Database");
    });
};

module.exports = databaseConnection