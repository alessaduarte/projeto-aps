import React, { useState } from "react";
import { Modal, Form, Button, ModalTitle, ModalFooter } from "@themesberg/react-bootstrap";

const CadastrarTreinos = ({ show, handleClose }) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [serie, setSerie] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <ModalTitle>Adicionar Treino</ModalTitle>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group controlId="formNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nome do treino"
              value={nome}
              onChange={e => setNome(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formDescricao">
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              type="text"
              placeholder="Descrição do treino"
              value={descricao}
              onChange={e => setDescricao(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="formSerie">
            <Form.Label>Série</Form.Label>
            <Form.Control
              type="texto"
              placeholder="Série do treino (ex: 3x10)"
              value={serie}
              onChange={e => setSerie(e.target.value)}
              required
            />
          </Form.Group>
        </Modal.Body>
        <ModalFooter>
          <Button variant="primary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="yellow" type="submit">
            Salvar
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  );
};

export default CadastrarTreinos;