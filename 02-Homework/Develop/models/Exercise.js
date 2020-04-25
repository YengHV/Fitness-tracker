// requiring mongoose package
const mongoose = require("mongoose");
// a method of mongoose
const Schema = mongoose.Schema;
// seting value to our object
const ExerciseSchema = new Schema({
  duration: Number,
  distance: Number
  

});
// creating Exercise model into out database
const Exercise = mongoose.model("Exercise", ExerciseSchema);
// exporting exercise
module.exports = Exercise;