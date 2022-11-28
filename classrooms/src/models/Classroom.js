const mongoose = require('mongoose');

const classroomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  openings: {
    type: Number,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  schedule: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Classroom", classroomSchema);