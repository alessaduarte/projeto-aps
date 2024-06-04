import React from 'react';
import { Modal, Button, Form } from '@themesberg/react-bootstrap';

const CadastrarAluno = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cadastro de Novo Aluno</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {/* Adicione seus campos de formulário aqui */}
          <Form.Group controlId="formNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Digite o nome" />
          </Form.Group>
          <Form.Group controlId="formdataNascimento">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control type="date" placeholder="Digite a data de nascimeto" />
          </Form.Group>
          <Form.Group controlId="formTelefone">
            <Form.Label>Telefone</Form.Label>
            <Form.Control type="text" placeholder="Digite o telefone" />
          </Form.Group>
          <Form.Group controlId="formDataMatricula">
            <Form.Label>Data de Matrícula</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
          <Form.Group controlId="formTipoAula">
            <Form.Label>Tipo de Aula</Form.Label>
            <Form.Control as="select">
              <option>Turma</option>
              <option>Individual</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="yellow" type="submit">
          Cadastrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CadastrarAluno;