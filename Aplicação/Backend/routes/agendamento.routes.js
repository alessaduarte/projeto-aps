module.exports = app => {
    const agendamentos = require('../controllers/agendamento.controller');
    app.post('/agendamentos', agendamentos.create);
    app.get('/agendamentos', agendamentos.findAll);
  };