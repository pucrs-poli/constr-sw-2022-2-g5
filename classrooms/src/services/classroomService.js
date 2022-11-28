
var { CannotFindClassroomError } = require('../errors/classroomsErrors');
const Classroom = require("../models/Classroom");

module.exports = {

  createClassroom: async function (classroom) {
    const createdClassroom = await Classroom.create(classroom);
    return createdClassroom;
  },

  getAllClassrooms: async function () {
    return Classroom.find();
  },

  getClassroom: async function (id) {
    const classroom = await Classroom.findById(id);
    console.log(classroom)
    if (!classroom) {
      throw new CannotFindClassroomError('Não foi possível encontrar esta turma.');
    }
    return classroom;
  },

  updateClassroom: async function (id, classroom) {
    const classroomAux = await Classroom.findById(id);
    if (!classroomAux) {
      throw new CannotFindClassroomError('Não foi possível encontrar esta turma.');
    }

    return await Classroom.findByIdAndUpdate(id, classroom);
  },

  deleteClassroom: async function (id) {
    const classroom = await Classroom.findById(id);
    if (!classroom) {
      throw new CannotFindClassroomError('Não foi possível encontrar esta turma.');
    }
    return await Classroom.findByIdAndDelete(id);
  },
};
