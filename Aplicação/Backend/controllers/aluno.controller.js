const Aluno = require('../models/aluno.model');

exports.getAllAlunos = async (req, res) => {
  try {
    const [alunos, _] = await Aluno.getAll();
    res.status(200).json(alunos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAlunoById = async (req, res) => {
  try {
    const [aluno, _] = await Aluno.getById(req.params.id);
    if (aluno.length === 0) {
      return res.status(404).json({ message: 'Aluno não encontrado' });
    }
    res.status(200).json(aluno[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createAluno = async (req, res) => {
  try {
    await Aluno.create(req.body);
    res.status(201).json({ message: 'Aluno criado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateAluno = async (req, res) => {
  try {
    await Aluno.update(req.params.id, req.body);
    res.status(200).json({ message: 'Aluno atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteAluno = async (req, res) => {
  try {
    await Aluno.delete(req.params.id);
    res.status(200).json({ message: 'Aluno deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// const Aluno = require('../models/aluno.model');

// exports.create = (req, res) => {
//   const novoAluno = new Aluno(req.body);
//   Aluno.create(novoAluno, (err, data) => {
//     if (err) res.status(500).send({ message: err.message });
//     else res.send(data);
//   });
// };

// exports.findAll = (req, res) => {
//   Aluno.getAll((err, data) => {
//     if (err) res.status(500).send({ message: err.message });
//     else res.send(data);
//   });
// };
