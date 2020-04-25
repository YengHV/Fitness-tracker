// reqiure these packages
// express
// morgan to log our development
// require our mongoose package to connect to mongo database
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// our local port or envoriment port for production
const PORT = process.env.PORT || 3000;
// requre seed.js to pre-populate data in our database
// const User = require("./seeders/seed.js");
// requiring our models with a vairble
const db = require("./models");
// making express equal to app
const app = express();
// morgan to log our development
app.use(logger("dev"));
// middleware
// formating files into json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// mongoose.connect() - connects to Mongo depending on the evirornment we're in
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
// a route to our root
app.get("/", (req, res) => {
  res.send("");
});

// route to get all of the workouts from  Workout
app.get("/api/workouts", (req, res) => {
  // looks for fitness in our models' folder and find({all})
  db.Workout.find({})
  // .then sned json data of the data
  .then(dbWorkout => {
    res.json(dbWorkout)
  })
  // catches error if there is an error
  .catch(err => {
    res.json(err);
  })
  // res.send("API WORKING");
  
});

app.post("/workoutUpdate", ({body}, res) => {
  db.Workout.create(body)
    .then(({_id}) => db.Workout.findOneAndUpdate({}, { $push: { workout: _id } }, { new: true }))
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/newWorkout", ({body}, res))
db.Workout.create({body})
  .then(dbWorkout => {
    console.log(dbWorkout);
  })
  .catch(({message}) => {
    console.log(message);
  });

// listening to port 3000
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});


// * Add exercises to a previous workout plan.
// app.post, findoneandupdate

// * Add new exercises to a new workout plan.
// app.post

// * View multiple the combined weight of multiple exercises on the `stats` page.
// app.get find({})