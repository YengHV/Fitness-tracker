const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const User = require("./seeders/seed.js");
const db = require("./models");
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// mongoose.connect() - connects to Mongo depending on the evirornment we're in
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
//example from another activity
app.get("/", (req, res) => {
  res.send("");
});


app.get("/api/workouts", (req, res) => {
  // db.Fitness.find({})
  // .then(dbFitness => {
  //   res.json(dbFitness)
  // })
  // .catch(err => {
  //   res.json(err);
  // })
  res.send("API WORKING");
  
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
