const sql = require('../config/db.config');

const Agendamento = function(agendamento) {
  this.aluno_id = agendamento.aluno_id;
  this.turma_id = agendamento.turma_id;
  this.data = agendamento.data;
  this.descricao = agendamento.descricao;
};

Agendamento.create = (novoAgendamento, result) => {
  sql.query("INSERT INTO agendamentos SET ?", novoAgendamento, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...novoAgendamento });
  });
};

Agendamento.getAll = result => {
  sql.query(`SELECT agendamentos.*, alunos.nome as aluno_nome, turmas.nome as turma_nome 
             FROM agendamentos 
             LEFT JOIN alunos ON agendamentos.aluno_id = alunos.id 
             LEFT JOIN turmas ON agendamentos.turma_id = turmas.id`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

module.exports = Agendamento;