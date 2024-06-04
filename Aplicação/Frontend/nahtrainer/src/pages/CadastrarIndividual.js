import React, { useState } from 'react';
import { Modal, Button, Form } from '@themesberg/react-bootstrap';

const CadastrarIndividual = ({ show, handleClose }) => {
  const [title, setTitle] = useState('');
  const [horario, setHorario] = useState('');
  const [dia, setDia] = useState('');
  const [dataInicio, setDataInicio] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Adicione a lógica para salvar o novo treino individual
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cadastrar Treino Individual</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group controlId="formTitle">
            <Form.Label>Título</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Título da turma" 
              value={title} 
              onChange={e => setTitle(e.target.value)} 
              required 
            />
          </Form.Group>
          <Form.Group controlId="formHorario" className="mt-3">
            <Form.Label>Horário</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Horário" 
              value={horario} 
              onChange={e => setHorario(e.target.value)} 
              required 
            />
          </Form.Group>
          <Form.Group controlId="formDia" className="mt-3">
            <Form.Label>Dia</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Dia da semana" 
              value={dia} 
              onChange={e => setDia(e.target.value)} 
              required 
            />
          </Form.Group>
          <Form.Group controlId="formDataInicio" className="mt-3">
            <Form.Label>Data de Início</Form.Label>
            <Form.Control 
              type="date" 
              placeholder="Data de início" 
              value={dataInicio} 
              onChange={e => setDataInicio(e.target.value)} 
              required 
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="yellow" type="submit">
            Salvar
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default CadastrarIndividual;
