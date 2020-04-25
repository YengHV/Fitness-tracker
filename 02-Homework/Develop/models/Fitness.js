const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FitnessSchema = new Schema({
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

const Fitness = mongoose.model("Fitness", FitnessSchema);

module.exports = Fitness;
