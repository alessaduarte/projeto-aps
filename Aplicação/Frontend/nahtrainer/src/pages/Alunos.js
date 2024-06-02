import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faInfoCircle, faEdit, faEllipsisH, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import alunoscss from '../scss/aluno.scss';
import { Card, Table, Dropdown, Button, ButtonGroup, InputGroup, FormControl, Container, Row, Col } from '@themesberg/react-bootstrap';
import CadastrarAluno from './CadastrarAlunos';

const AlunosTable = () => {
  const [alunos, setAlunos] = useState([
    { id: 1, nome: 'Maria Sofia', idade: 20, telefone: '(83)91234-5678', data_matricula: '2023-01-15', tipo_aula: 'Turma' },
    { id: 2, nome: 'Ana Clara', idade: 21, telefone: '(83)98765-4321', data_matricula: '2023-01-16', tipo_aula: 'Individual' },
    { id: 3, nome: 'Beatriz Oliveira', idade: 22, telefone: '(83)91234-6789', data_matricula: '2023-01-17', tipo_aula: 'Turma' },
    { id: 4, nome: 'Clara Martins', idade: 23, telefone: '(83)97654-3210', data_matricula: '2023-01-18', tipo_aula: 'Individual' },
    { id: 5, nome: 'Diana Silva', idade: 24, telefone: '(83)91234-8901', data_matricula: '2023-01-19', tipo_aula: 'Turma' },
    { id: 6, nome: 'Eloá Fernandes', idade: 25, telefone: '(83)94567-1234', data_matricula: '2023-01-20', tipo_aula: 'Individual' },
    { id: 7, nome: 'Fernanda Almeida', idade: 26, telefone: '(83)95678-2345', data_matricula: '2023-01-21', tipo_aula: 'Turma' },
    { id: 8, nome: 'Gabriela Costa', idade: 27, telefone: '(83)96789-3456', data_matricula: '2023-01-22', tipo_aula: 'Individual' },
    { id: 9, nome: 'Helena Souza', idade: 28, telefone: '(83)97890-4567', data_matricula: '2023-01-23', tipo_aula: 'Turma' },
    { id: 10, nome: 'Isabela Lima', idade: 29, telefone: '(83)98901-5678', data_matricula: '2023-01-24', tipo_aula: 'Individual' }
  ]);

  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    axios.get('http://localhost:3000/api/alunos')
      .then(response => {
        setAlunos(prevAlunos => [...prevAlunos, ...response.data]);
      })
      .catch(error => {
        console.error('Erro ao obter alunos:', error);
      });
  }, []);

  const filteredAlunos = alunos.filter(aluno => 
    aluno.nome.toLowerCase().includes(search.toLowerCase())
  );

  const TableRow = (props) => {
    const { id, nome, idade, telefone, data_matricula, tipo_aula } = props;

    return (
      <tr key={id}>
        <td>{nome}</td>
        <td>{idade}</td>
        <td>{telefone}</td>
        <td>{data_matricula}</td>
        <td>{tipo_aula}</td>
        <td>
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle as={Button} split variant="link" className="text-dark m-0 p-0">
              <span className="icon icon-sm">
                <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faInfoCircle} className="me-2" /> Visualizar
              </Dropdown.Item>
              <Dropdown.Item>
                <FontAwesomeIcon icon={faEdit} className="me-2" /> Editar
              </Dropdown.Item>
              <Dropdown.Item className="text-danger">
                <FontAwesomeIcon icon={faTrashAlt} className="me-2" /> Remover
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </td>
      </tr>
    );
  };

  return (
      <Container className="my-3">
        <h2>Alunos</h2>
        <Row className='justify-content-between'>
          <Col xs="auto" className="flex-grow-1">
            <InputGroup>
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
            <Button variant="outline-primary" size="sm" onClick={handleShowModal} style={{ width: '100%' }}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </Col>
        </Row>

      <CadastrarAluno show={showModal} handleClose={handleCloseModal} />

      <Card border="light" className="shadow-sm">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th>Nome</th>
              <th>Idade</th>
              <th>Telefone</th>
              <th>Data de Matrícula</th>
              <th>Tipo de Aula</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filteredAlunos.map(aluno => <TableRow key={aluno.id} {...aluno} />)}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
};

export default AlunosTable;
