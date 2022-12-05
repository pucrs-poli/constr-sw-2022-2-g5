var service = require('../services/classroomService');

module.exports = {

  getAllClassrooms: async function (req, res) {
    try {
      const classrooms = await service.getAllClassrooms();
      console.log(classrooms)
      return res.status(200).json(classrooms);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  getClassroom: async function (req, res) {
    try {
      const classroom = await service.getClassroom(req.params.id);
      console.log(classroom)
      return res.status(200).json(classroom);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  createClassroom: async function (req, res) {
    try {
      const classroom = await service.createClassroom(req.body);
      console.log(classroom)
      return res.status(201).json(classroom);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  patchClassroom: async function (req, res) {
    try {
      const classroom = await service.updateClassroom(req.params.id, req.body);
      console.log(classroom)
      return res.status(200).json(classroom);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  putClassroom: async function (req, res) {
    try {
      const classroom = await service.updateClassroom(req.params.id, req.body);
      console.log(classroom)
      return res.status(200).json(classroom);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  deleteClassroom: async function (req, res) {
    try {
      await service.deleteClassroom(req.params.id);
      return res.status(200).json({ mssg: 'Classroom deleted!' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
