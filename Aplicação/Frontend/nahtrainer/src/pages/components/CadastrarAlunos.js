import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { faTrash, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Container } from '@themesberg/react-bootstrap';
import AlunoForm from './components/AlunoForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import alunoscss from '../scss/aluno.scss';

const Alunos = () => {
  const [alunos, setAlunos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/api/alunos')
      .then(response => setAlunos(response.data))
      .catch(error => console.error('Erro ao buscar alunos:', error));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/alunos/${id}`)
      .then(() => setAlunos(alunos.filter(aluno => aluno.id !== id)))
      .catch(error => console.error('Erro ao deletar aluno:', error));
  };

  const filteredAlunos = alunos.filter(aluno =>
    aluno.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <h2>Lista de Alunos</h2>
      <input
        type="text"
        placeholder="Pesquisar aluno"
        className="form-control mb-3"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <AlunoForm />
      <ul className="list-group mt-3">
        {filteredAlunos.map(aluno => (
          <li key={aluno.id} className="list-group-item d-flex justify-content-between align-items-center">
            {aluno.nome} - Idade: {new Date().getFullYear() - aluno.ano_nascimento} - Telefone: {aluno.telefone}
            <div>
              <faInfoCircle className="mr-3" style={{ cursor: 'pointer' }} />
              <faTrash style={{ cursor: 'pointer' }} onClick={() => handleDelete(aluno.id)} />
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Alunos;


// import React, { useState, useEffect } from 'react';
// import api from '../api';

// const Alunos = () => {
//   const [alunos, setAlunos] = useState([]);

//   useEffect(() => {
//     api.get('/alunos')
//       .then(response => setAlunos(response.data))
//       .catch(error => console.error('Erro ao buscar alunos:', error));
//   }, []);

//   return (
//     <div>
//       <h2>Alunos</h2>
//       <ul>
//         {alunos.map(aluno => (
//           <li key={aluno.id}>{aluno.nome}, {aluno.idade} anos, objetivo: {aluno.objetivo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Alunos;