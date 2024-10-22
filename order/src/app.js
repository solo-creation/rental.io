const express = require("express");
const app = express();

const Database = require("./config/database.config");

app.use("/health", (req, res, next) => {
  return res.status(200).json({
    status: "Running",
  });
});

// INITIALIZING DATABASE CONNECTION
const database = new Database();
database.connectDB();

module.exports = app;
