const sql = require('../config/db.config');

const Turma = function(turma) {
  this.nome = turma.nome;
  this.descricao = turma.descricao;
};

Turma.create = (novaTurma, result) => {
  sql.query("INSERT INTO turmas SET ?", novaTurma, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...novaTurma });
  });
};

Turma.getAll = result => {
  sql.query("SELECT * FROM turmas", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

module.exports = Turma;
