const express = require('express');
const controller = require('../controllers/turmaController');

const router = express.Router();

// GET - retorna todas as turmas
router.get('/', controller.getAllTurmas);

// GET - retorna uma única turma
router.get('/:id', controller.getTurma);

// POST - cria uma turma
router.post('/addTurma', controller.createTurma);

// PATCH - atualiza uma turma
router.patch('/:id', controller.patchTurma);

// PUT - atualiza uma turma
router.put('/:id', controller.putTurma);

// DELETE - deleta uma turma
router.delete('/:id', controller.deleteTurma);

module.exports = router;
