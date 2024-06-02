const Turma = require('../models/turma.model');

exports.create = (req, res) => {
  const novaTurma = new Turma(req.body);
  Turma.create(novaTurma, (err, data) => {
    if (err) res.status(500).send({ message: err.message });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Turma.getAll((err, data) => {
    if (err) res.status(500).send({ message: err.message });
    else res.send(data);
  });
};