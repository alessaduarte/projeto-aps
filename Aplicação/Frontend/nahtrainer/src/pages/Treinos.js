import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEllipsisH, faInfoCircle, faPlus, faTrashAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Card, Table, Dropdown, Button, ButtonGroup, InputGroup, FormControl, Container, Row, Col } from "@themesberg/react-bootstrap";
import CadastrarTreinos from "./CadastrarTreinos";

const TreinosTable = () => {
    const [treinos, setTreinos] = useState([
        { id: 1, nome: "Avanço", descricao: "Exercício para pernas e glúteos", serie: "3x10" },
        { id: 2, nome: "Afundo com peso", descricao: "Exercício com halteres para pernas e glúteos", serie: "3x12" },
        { id: 3, nome: "Anfersen", descricao: "Exercício de corrida estacionária", serie: "4x15" },
        { id: 4, nome: "Agachamento Livre", descricao: "Exercício de agachamento sem pesos", serie: "3x15" },
        { id: 5, nome: "Agachamento com Peso", descricao: "Exercício de agachamento com halteres", serie: "3x12" },
        { id: 6, nome: "Agachamento com salto", descricao: "Agachamento seguido de salto", serie: "4x10" },
        { id: 7, nome: "Agachamento com Elástico", descricao: "Agachamento utilizando elástico de resistência", serie: "3x12" },
        { id: 8, nome: "Agachamento com insistência", descricao: "Agachamento com pausa", serie: "3x12" },
        { id: 9, nome: "Agacha e pula, mão alternando", descricao: "Agachamento seguido de salto com movimento de braço", serie: "4x10" },
        { id: 10, nome: "Abdução com Elástico", descricao: "Exercício para abdução de quadril", serie: "3x15" },
        { id: 11, nome: "Adução com caneleira", descricao: "Exercício para adução de quadril", serie: "3x15" },
        { id: 12, nome: "ABS Remador", descricao: "Exercício abdominal remador", serie: "3x20" },
        { id: 13, nome: "ABS Remador com apoio", descricao: "Exercício abdominal remador com apoio", serie: "3x20" },
        { id: 14, nome: "ABS Oblíquos unilateral", descricao: "Exercício abdominal para oblíquos unilateral", serie: "3x15" },
        { id: 15, nome: "ABS Oblíquos com peso", descricao: "Exercício abdominal para oblíquos com peso", serie: "3x15" },
        { id: 16, nome: "ABS Oblíquos", descricao: "Exercício abdominal para oblíquos", serie: "3x20" },
        { id: 17, nome: "ABS Tesoura", descricao: "Exercício abdominal tesoura", serie: "3x15" },
        { id: 18, nome: "ABS Infra", descricao: "Exercício abdominal infra", serie: "3x20" },
        { id: 19, nome: "ABS Supra", descricao: "Exercício abdominal supra", serie: "3x20" },
        { id: 20, nome: "Burpee", descricao: "Exercício de burpee", serie: "4x10" },
        { id: 21, nome: "Cadeirinha", descricao: "Exercício de isometria de parede", serie: "3x30s" },
        { id: 22, nome: "Corrida Livre", descricao: "Corrida sem percurso definido", serie: "20min" },
        { id: 23, nome: "Coice com elástico", descricao: "Exercício de coice com elástico", serie: "3x15" },
        { id: 24, nome: "Corrida vai e volta", descricao: "Corrida com mudança de direção", serie: "4x50m" },
        { id: 25, nome: "Crucifixo deitado", descricao: "Exercício de crucifixo deitado", serie: "3x12" },
        { id: 26, nome: "Crucifixo inclinado", descricao: "Exercício de crucifixo inclinado", serie: "3x12" },
        { id: 27, nome: "Crucifixo em pé", descricao: "Exercício de crucifixo em pé", serie: "3x12" },
        { id: 28, nome: "Deslocamento lateral", descricao: "Deslocamento lateral com agachamento", serie: "3x20" },
        { id: 29, nome: "Desenvolvimento", descricao: "Exercício de desenvolvimento de ombros", serie: "3x12" },
        { id: 30, nome: "Elevação lateral", descricao: "Exercício de elevação lateral de ombros", serie: "3x15" },
        { id: 31, nome: "Elevação frontal", descricao: "Exercício de elevação frontal de ombros", serie: "3x15" },
        { id: 32, nome: "Elevação e salto de joelho", descricao: "Exercício de elevação de joelho seguido de salto", serie: "3x12" },
        { id: 33, nome: "Elevação de joelho unilateral", descricao: "Elevação de joelho unilateral", serie: "3x15" },
        { id: 34, nome: "Escalada", descricao: "Exercício de escalada estacionária", serie: "4x15" },
        { id: 35, nome: "Flexão de braço", descricao: "Exercício de flexão de braço", serie: "3x15" },
        { id: 36, nome: "Pulos laterais", descricao: "Pulos laterais com agachamento", serie: "4x20" },
        { id: 37, nome: "Pulos Livres", descricao: "Pulos livres com agachamento", serie: "4x20" },
        { id: 38, nome: "Polichinelo", descricao: "Exercício de polichinelo", serie: "4x20" },
        { id: 39, nome: "Polifrontal", descricao: "Exercício de polichinelo frontal", serie: "4x20" },
        { id: 40, nome: "Polipalma", descricao: "Exercício de polichinelo com palma", serie: "4x20" },
        { id: 41, nome: "Passada", descricao: "Exercício de passada", serie: "3x15" },
        { id: 42, nome: "Panturrilha", descricao: "Exercício de panturrilha", serie: "3x20" },
        { id: 43, nome: "Prancha Estendida", descricao: "Prancha estendida", serie: "3x30s" },
        { id: 44, nome: "Prancha Direta", descricao: "Prancha direta", serie: "3x30s" },
        { id: 45, nome: "Prancha Lateral", descricao: "Prancha lateral", serie: "3x30s" },
        { id: 46, nome: "Rosca Direta", descricao: "Exercício de rosca direta", serie: "3x15" },
        { id: 47, nome: "Rosca Martelo", descricao: "Exercício de rosca martelo", serie: "3x15" },
        { id: 48, nome: "Remada Curvada", descricao: "Exercício de remada curvada", serie: "3x12" },
        { id: 49, nome: "Remada Alta", descricao: "Exercício de remada alta", serie: "3x12" },
        { id: 50, nome: "Stiff", descricao: "Exercício de stiff", serie: "3x12" },
        { id: 51, nome: "Sumô", descricao: "Exercício de agachamento sumô", serie: "3x15" },
        { id: 52, nome: "Step Unilateral", descricao: "Step unilateral", serie: "3x15" },
        { id: 53, nome: "Tesoura", descricao: "Exercício de tesoura", serie: "3x15" },
        { id: 54, nome: "Tesoura alta", descricao: "Exercício de tesoura alta", serie: "3x15" },
        { id: 55, nome: "Tríceps Francês", descricao: "Exercício de tríceps francês", serie: "3x15" },
        { id: 56, nome: "Tríceps Banco", descricao: "Exercício de tríceps banco", serie: "3x15" },
        { id: 57, nome: "Tríceps Testa", descricao: "Exercício de tríceps testa", serie: "3x15" }
]);

    const [search, setSearch] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    axios.get('http://localhost:3000/api/treinos')
      .then(response => {
        setTreinos(prevTreinos => [...prevTreinos, ...response.data]);
      })
      .catch(error => {
        console.error('Erro ao obter treinos:', error);
      });
  }, []);

  const filteredTreinos = treinos.filter(treino => 
    treino.nome.toLowerCase().includes(search.toLowerCase())
  );

  const TableRow = (props) => {
    const { id, nome, descricao, serie } = props;

    return (
        <tr key={id}>
            <td>{nome}</td>
            <td>{descricao}</td>
            <td>{serie}</td>
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
            <h2>Treinos</h2>
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
                    <Button variant="outline-primary" size="sm" onClick={handleShowModal} style={{ width: '100%' }}>
                        <FontAwesomeIcon icon={faPlus} />
                    </Button>
                </Col>
            </Row>
       
       <CadastrarTreinos show={showModal} handleClose={handleCloseModal} />

        <Card border="light" className="shadow-sm mt-3">
            <Table responsive className="table-centered table-nowrap rounded mb-0">
            <thead className="thead-light">
                <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Séries</th>
                </tr>
            </thead>
            <tbody>
                {filteredTreinos.map(treino => <TableRow key={treino.id} {...treino} />)}
            </tbody>
            </Table>
      </Card>
    </Container>
  );
};

export default TreinosTable;