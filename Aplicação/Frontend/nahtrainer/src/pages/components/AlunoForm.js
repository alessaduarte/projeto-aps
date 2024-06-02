import React, { useState } from 'react';
import { Form, InputGroup, Container, Row, Col } from '@themesberg/react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import Datetime from "react-datetime";
import moment from "moment-timezone";
import axios from 'axios';
import alunoscss from '../scss/aluno.scss';

const AlunoForm = () => {
  const [aluno, setAluno] = useState({
    nome: '',
    data_nascimento: '',
    telefone: '',
    data_matricula: '',
    tipo_aula: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAluno({ ...aluno, [name]: value });
  };

  const handleDateChange = (date) => {
    setAluno({ ...aluno, data_matricula: moment(date).format('YYYY-MM-DD') });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/alunos', aluno)
      .then(response => {
        console.log('Aluno cadastrado com sucesso:', response.data);
        setAluno({
          nome: '',
          data_nascimento: '',
          telefone: '',
          data_matricula: '',
          tipo_aula: ''
        });
      })
      .catch(error => console.error('Erro ao cadastrar aluno:', error));
  };

  return (
    <Container>
      <Row className="d-flex flex-wrap flex-md-nowrap align-items-center py-4">
        <Col className="d-block mb-4 mb-md-0">
          <h1 className="h2">Cadastrar Novo Aluno</h1>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <InputGroup>
            <InputGroup.Text><FontAwesomeIcon icon={faUser} /></InputGroup.Text>
            <Form.Control
              type="text"
              name="nome"
              value={aluno.nome}
              onChange={handleChange}
              required
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Data de Nascimento</Form.Label>
          <Datetime
            timeFormat={false}
            closeOnSelect={true}
            onChange={(date) => setAluno({ ...aluno, data_nascimento: moment(date).format('YYYY-MM-DD') })}
            renderInput={(props, openCalendar) => (
              <InputGroup>
                <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                <Form.Control
                  required
                  type="text"
                  value={aluno.data_nascimento ? moment(aluno.data_nascimento).format("MM/DD/YYYY") : ""}
                  placeholder="mm/dd/yyyy"
                  onFocus={openCalendar}
                  onChange={() => { }}
                />
              </InputGroup>
            )}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Telefone</Form.Label>
          <InputGroup>
            <InputGroup.Text><FontAwesomeIcon icon={faPhone} /></InputGroup.Text>
            <Form.Control
              type="text"
              name="telefone"
              value={aluno.telefone}
              onChange={handleChange}
              required
            />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Data de Matrícula</Form.Label>
          <Datetime
            timeFormat={false}
            closeOnSelect={true}
            onChange={handleDateChange}
            renderInput={(props, openCalendar) => (
              <InputGroup>
                <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                <Form.Control
                  required
                  type="text"
                  value={aluno.data_matricula ? moment(aluno.data_matricula).format("MM/DD/YYYY") : ""}
                  placeholder="mm/dd/yyyy"
                  onFocus={openCalendar}
                  onChange={() => { }}
                />
              </InputGroup>
            )}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tipo de Aula</Form.Label>
          <Form.Select
            name="tipo_aula"
            value={aluno.tipo_aula}
            onChange={handleChange}
            required
          >
            <option value="">Selecione</option>
            <option value="Individual">Individual</option>
            <option value="Em grupo">Em grupo</option>
          </Form.Select>
        </Form.Group>
        <button type="submit" className="btn btn-primary">Cadastrar</button>
      </Form>
    </Container>
  );
};

export default AlunoForm;
