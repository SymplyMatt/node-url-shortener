require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 8000;
const connectDB = require("./config/dbconnect");
const mongoose = require("mongoose");
const path = require("path");

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/redirect", express.static(__dirname + "/public"));

app.use("/", require("./routes/redirect"));
app.use("/shorten", require("./routes/shorten"));

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
