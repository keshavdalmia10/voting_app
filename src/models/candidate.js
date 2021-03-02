const mongoose = require("mongoose");

//candidate schema
const candidateSchema = new mongoose.Schema({
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  vote: {
    type: Number,
    default: 0,
  },
});

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;
