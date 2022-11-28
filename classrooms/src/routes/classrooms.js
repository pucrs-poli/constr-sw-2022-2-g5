const express = require('express');
const controller = require('../controllers/classroomController');

const router = express.Router();


router.get('/', controller.getAllClassrooms);

router.get('/:id', controller.getClassroom);

router.post('/', controller.createClassroom);

router.patch('/:id', controller.patchClassroom);

router.put('/:id', controller.putClassroom);

router.delete('/:id', controller.deleteClassroom);

module.exports = router;
