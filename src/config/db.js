const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/expense")
  .then((connection) => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
  });

module.exports = mongoose;
