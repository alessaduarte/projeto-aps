import React from 'react';
import { Modal, Button, Form } from '@themesberg/react-bootstrap';

const CadastrarTurma = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cadastrar Nova Turma</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Título</Form.Label>
            <Form.Control type="text" placeholder="Digite o título da turma" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Horário</Form.Label>
            <Form.Control type="time" placeholder="Digite o horário da turma" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Dia</Form.Label>
            <Form.Control type="text" placeholder="Digite o dia da turma" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Quantidade</Form.Label>
            <Form.Control type="number" placeholder="Digite a quantidade de alunos" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Data de Início</Form.Label>
            <Form.Control type="date" placeholder="Digite a data de início" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-end">
        <Button variant="primary" onClick={handleClose} className="ms-2">
          Fechar
        </Button>
        <Button variant="yellow" type="submit" className="ms-2">
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CadastrarTurma;
