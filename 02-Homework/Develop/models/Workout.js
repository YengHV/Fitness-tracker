// requiring mongoose package
const mongoose = require("mongoose");
// calling a varible Schemea which is eqaul to mongoose.Schema
const Schema = mongoose.Schema;
// making a new schema object
// will hold the values of the object
const WorkoutSchema = new Schema({
  type: {
    type: String,
    unique: true,
  },
  
  name: {
    String,
  },
  weight: {
 Number,
  },
  reps: {
    Number,
  },
  sets: {
    Number,
  },
 
  exercise: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
    }
  ]
});
// Making a schema called workout into the mongo database
const Workout = mongoose.model("Workout", WorkoutSchema);
// exporting workout model
module.exports = Workout;
