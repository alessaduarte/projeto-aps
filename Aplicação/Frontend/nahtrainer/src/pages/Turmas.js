import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Card, Table, Button, ButtonGroup, InputGroup, FormControl, Container, Row, Col } from '@themesberg/react-bootstrap';
import CadastrarTurmas from './CadastrarTurmas';

const TurmasTable = () => {
  const [turmas, setTurmas] = useState([
    { id: 1, titulo: 'Turma A', horario: '7:00', dia: 'Segunda', quantidade: 10, data_inicio: '2023-01-15' },
    { id: 2, titulo: 'Turma B', horario: '18:00', dia: 'Terça', quantidade: 15, data_inicio: '2023-01-16' },
    { id: 3, titulo: 'Turma C', horario: '8:00', dia: 'Quarta', quantidade: 20, data_inicio: '2023-01-17' },
    // Adicione mais turmas conforme necessário
  ]);

  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    axios.get('http://localhost:3000/api/turmas')
      .then(response => {
        setTurmas(prevTurmas => [...prevTurmas, ...response.data]);
      })
      .catch(error => {
        console.error('Erro ao obter turmas:', error);
      });
  }, []);

  const filteredTurmas = turmas.filter(turma => 
    turma.titulo.toLowerCase().includes(search.toLowerCase())
  );

  const TableRow = (props) => {
  const { id, titulo, horario, dia, quantidade, data_inicio } = props;

  return (
      <tr key={id}>
        <td>{titulo}</td>
        <td>{horario}</td>
        <td>{dia}</td>
        <td>{quantidade}</td>
        <td>{data_inicio}</td>
        <td>
          <ButtonGroup>
            <Button variant="link" className="text-dark">
              <FontAwesomeIcon icon={faEdit} />
            </Button>
            <Button variant="link" className="text-dark">
              <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    );
  };

  return (
      <Container className="my-3">
        <h2>Turmas</h2>
        <Row className="justify-content-between">
          <Col xs="auto">
            <InputGroup style={{ maxWidth: '300px' }}>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <FormControl 
                placeholder="Pesquisar" 
                value={search} 
                onChange={e => setSearch(e.target.value)} 
              />
            </InputGroup>
          </Col>
          <Col xs="auto">
            <Button variant="outline-primary" size="sm" onClick={handleShowModal}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </Col>
        </Row>

      <CadastrarTurmas show={showModal} handleClose={handleCloseModal} />

      <Card border="light" className="shadow-sm">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th>Título</th>
              <th>Horário</th>
              <th>Dia</th>
              <th>Quantidade</th>
              <th>Data de Início</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredTurmas.map(turma => <TableRow key={turma.id} {...turma} />)}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default TurmasTable;