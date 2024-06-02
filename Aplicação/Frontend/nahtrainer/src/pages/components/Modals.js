import React, { useState } from 'react';
import { Row, Col, Button, Modal, Form } from '@themesberg/react-bootstrap';
import axios from 'axios';

const NovoAlunoModal = ({ show, handleClose }) => {
  const [aluno, setAluno] = useState({
    nome: '',
    dataNascimento: '',
    telefone: '',
    dataMatricula: '',
    tipoAula: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno({ ...aluno, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/alunos', aluno)
      .then(response => {
        console.log('Aluno cadastrado com sucesso:', response.data);
        handleClose();
      })
      .catch(error => {
        console.error('Erro ao cadastrar aluno:', error);
        handleClose();
      });
  };

  return (
    <Modal as={Modal.Dialog} centered show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title className="h6">Cadastro de Novo Aluno</Modal.Title>
        <Button variant="close" aria-label="Close" onClick={handleClose} />
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" name="nome" value={aluno.nome} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control type="date" name="dataNascimento" value={aluno.dataNascimento} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="text" name="telefone" value={aluno.telefone} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Data de Matrícula</Form.Label>
            <Form.Control type="date" name="dataMatricula" value={aluno.dataMatricula} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Tipo de Aula</Form.Label>
            <Form.Control as="select" name="tipoAula" value={aluno.tipoAula} onChange={handleChange} required>
              <option value="">Selecione</option>
              <option value="Individual">Individual</option>
              <option value="Em grupo">Em grupo</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Cadastrar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default NovoAlunoModal;
