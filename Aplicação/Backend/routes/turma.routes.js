module.exports = app => {
    const turmas = require('../controllers/turma.controller');
    app.post('/turmas', turmas.create);
    app.get('/turmas', turmas.findAll);
  };