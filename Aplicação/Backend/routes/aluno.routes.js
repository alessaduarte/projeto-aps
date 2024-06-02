const express = require('express');
const alunoController = require('../controllers/aluno.controller');
const router = express.Router();

router.get('/', alunoController.getAllAlunos);
router.get('/:id', alunoController.getAlunoById);
router.post('/', alunoController.createAluno);
router.put('/:id', alunoController.updateAluno);
router.delete('/:id', alunoController.deleteAluno);

module.exports = router;


// module.exports = app => {
//     const alunos = require('../controllers/aluno.controller');
//     app.post('/alunos', alunos.create);
//     app.get('/alunos', alunos.findAll);
//   };