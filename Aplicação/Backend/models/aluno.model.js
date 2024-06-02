const db = require('../config/db.config');

const Aluno = {
  // outras funções getAll, getById, delete...

  create: (aluno) => {
    return db.execute(
      'INSERT INTO alunos (nome, data_nascimento, telefone, data_matricula, tipo_aula) VALUES (?, ?, ?, ?, ?)',
      [aluno.nome, aluno.data_nascimento, aluno.telefone, aluno.data_matricula, aluno.tipo_aula]
    );
  },

  update: (id, aluno) => {
    return db.execute(
      'UPDATE alunos SET nome = ?, data_nascimento = ?, telefone = ?, data_matricula = ?, tipo_aula = ? WHERE id = ?',
      [aluno.nome, aluno.data_nascimento, aluno.telefone, aluno.data_matricula, aluno.tipo_aula, id]
    );
  }
};

module.exports = Aluno;
