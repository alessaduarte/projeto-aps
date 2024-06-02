import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit, faSearch, faPlus ,faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Card, Table, Dropdown, Button, ButtonGroup, InputGroup, FormControl, Container, Row, Col } from '@themesberg/react-bootstrap';
import CadastrarIndividual from './CadastrarIndividual';

const IndividualTable = () => {
  const [individuals, setIndividuals] = useState([
    { id: 1, title: 'Individual A', horario: '7:00', dia: 'Segunda', quantidade: 1, data_inicio: '2023-01-15' },
    { id: 2, title: 'Individual B', horario: '18:00', dia: 'Terça', quantidade: 1, data_inicio: '2023-01-16' },
  ]);

  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    axios.get('/individual')
      .then(response => {
        setIndividuals(prevIndividuals => [...prevIndividuals, ...response.data]);
      })
      .catch(error => console.error('Erro ao obter indivíduos:', error));
  }, []);

  const filteredIndividuals = individuals.filter(individual =>
    individual.title.toLowerCase().includes(search.toLowerCase())
  );

  const TableRow = (props) => {
  const { id, title, horario, dia, quantidade, data_inicio } = props;

  return (
    <tr key={id}>
      <td>{title}</td>
      <td>{horario}</td>
      <td>{dia}</td>
      <td>{quantidade}</td>
      <td>{data_inicio}</td>
      <td>
        <Dropdown as={ButtonGroup}>
          <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
            <span className="icon icon-sm">
              <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
            </span>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item>
              <FontAwesomeIcon icon={faEdit} className="me-2" /> Editar
            </Dropdown.Item>
            <Dropdown.Item className="text-danger">
              <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Excluir
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </td>
    </tr>
  );
};

return (
  <Container className="my-3">
    <h2>Individual</h2>
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
        <Button variant="outline-primary" size="sm" onClick={handleShowModal} className="ms-2">
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Col>
    </Row>

    <CadastrarIndividual show={showModal} handleClose={handleCloseModal} />

    <Card border="light" className="shadow-sm mt-3">
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
          {filteredIndividuals.map(individual => <TableRow key={individual.id} {...individual} />)}
        </tbody>
      </Table>
    </Card>
  </Container>
);
};

export default IndividualTable;