import React, { useState, useEffect } from 'react';
import api from '../api';

const Agendamentos = () => {
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    api.get('/agendamentos')
      .then(response => setAgendamentos(response.data))
      .catch(error => console.error('Erro ao buscar agendamentos:', error));
  }, []);

  return (
    <div>
      <h2>Agendamentos</h2>
      <ul>
        {agendamentos.map(agendamento => (
          <li key={agendamento.id}>
            {agendamento.data} - {agendamento.descricao} (Aluno: {agendamento.aluno_nome}, Turma: {agendamento.turma_nome})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Agendamentos;