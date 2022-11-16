var service = require('../services/turmaService');

module.exports = {
  // GET - retorna todas as turmas
  getAllTurmas: async function (req, res) {
    try {
      const turmas = await service.getAllTurmas(req, res);
      return res.status(200).json(turmas);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // GET - retorna uma única turma
  getTurma: async function (req, res) {
    try {
      const turma = await service.getTurma(req, res);
      return res.status(200).json(turma);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  // POST - cria uma turma
  createTurma: async function (req, res) {
    try {
      const turma = await service.createTurma(req, res);
      return res.status(201).json(turma);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // PATCH - atualiza uma turma
  patchTurma: async function (req, res) {
    try {
      const turma = await service.patchTurma(req, res);
      return res.status(200).json(turma);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // PUT - atualiza uma turma
  putTurma: async function (req, res) {
    try {
      const turma = await service.putTurma(req, res);
      return res.status(200).json(turma);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  // DELETE - deleta uma turma
  deleteTurma: async function (req, res) {
    try {
      await service.deleteTurma(req, res);
      return res.status(200).json({ mssg: 'Turma deletada!' });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
