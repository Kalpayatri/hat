const mongoose = require("mongoose");

const universitySchema = new mongoose.Schema({
  universityName: {
    type: String,
  },
  courseName: {
    type: String,
  },
  courseType: {
    type: String,
  },
  worldRanking: {
    type: Number,
  },
  germanyRanking: {
    type: Number,
  },
  location: {
    type: String,
  },
  state: {
    type: String,
  },
  beginningSemester: {
    type: String,
  },
  duration: {
    type: String,
  },
  teachingLanguage: {
    type: String,
  },
  germanGradeRequirement: {
    type: String,
  },
  tuitionFee: {
    type: String,
  },
  applicationDeadlines: {
    type: Object,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
});

const University = mongoose.model("University", universitySchema);

module.exports = University;
