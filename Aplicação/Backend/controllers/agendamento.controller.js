const Agendamento = require('../models/agendamento.model');

exports.create = (req, res) => {
  const novoAgendamento = new Agendamento(req.body);
  Agendamento.create(novoAgendamento, (err, data) => {
    if (err) res.status(500).send({ message: err.message });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Agendamento.getAll((err, data) => {
    if (err) res.status(500).send({ message: err.message });
    else res.send(data);
  });
};