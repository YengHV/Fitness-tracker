const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
