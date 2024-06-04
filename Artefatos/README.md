<div align="center">
  <h1 align="center">
    Projeto de Gerenciamento de Personal Trainer
    <br />
    <br />
    <a href="">
      <img src="https://github.com/alessaduarte/projeto-aps/assets/100052794/992b17e9-9a2f-48e6-a751-b74ccd500d02" alt="Banner Nah Trainer">
    </a>
  </h1>
</div>

# Artefatos

Artefatos que foram utilizados para desenvolver a base do projeto, o cronograma e a divisâo de tarefas.

<br />

## Diagramas - UML e Padrões

### Diagrama de Classes

<img src="https://github.com/alessaduarte/projeto-aps/assets/100052794/e84d7b8a-3a17-4a50-b0ac-f4dedb53ab8f" alt="Diagrama de Classes">

<br />

### Diagrama de Componentes

<img src="https://github.com/alessaduarte/projeto-aps/assets/100052794/7ca64051-70cb-442d-8991-bc94e74c98f9" alt="Diagrama de Componentes">

<br />

### Diagrama de Casos de Uso

<img src="https://github.com/alessaduarte/projeto-aps/assets/100052794/525d230f-6b64-4458-8a91-5faa4b1f4ea2" alt="Diagrama de Casos de Uso">

<br />

### Diagrama de Instalação

<img src="https://github.com/alessaduarte/projeto-aps/assets/100052794/a0af9bab-6edb-4610-92f6-29863bf86f8e" alt="Diagrama de Instalação">

<br />
<br />

## Modelo de Dados

### Modelo Lógico

<img src="https://github.com/alessaduarte/projeto-aps/assets/100052794/45817716-5161-412b-98e1-888502115c73" alt="Modelo Lógico">

<br />

### Modelo Conceitual

<img src="https://github.com/alessaduarte/projeto-aps/assets/100052794/129c6efe-9daa-4f91-8aa0-8b3a9ff0e270" alt="Modelo Conceitual">

<br />

### Modelo Físico (MySQL)

<img src="https://github.com/alessaduarte/projeto-aps/assets/100052794/a50cf5e5-7090-4ea2-aff0-e49b11755122" alt="Modelo Conceitual">

```
CREATE TABLE Usuario (
  	UsuarioID int,
  	Nome varchar(50),
  	Email varchar(60),
  	Senha varchar(8),
  	PRIMARY KEY (UsuarioID)
);

CREATE TABLE Aluno (
  	AlunoID int,
  	Nome varchar(50),
  	DataNascimento date,
	Telefone varchar(10),
	DataMatricula date,
    TipoAula enum("Individual", "Turma"),
  	PRIMARY KEY (AlunoID)
);

CREATE TABLE Individual (
  	IndividualID int,
    AlunoID int,
  	Titulo varchar(50),
    Horario time,
  	Dia varchar(50),
	DataInicio date,
  	PRIMARY KEY (IndividualID),
    FOREIGN KEY (AlunoID) REFERENCES Aluno(AlunoID)
);

CREATE TABLE Turma (
  	TurmaID int,
    AlunoID int,
    Titulo varchar(50),
    Horario time,
  	Dia varchar(50),
  	QuantidadeAlunos int,
    DataInicio date,
  	PRIMARY KEY (TurmaID),
    FOREIGN KEY (AlunoID) REFERENCES Aluno(AlunoID)
);

CREATE TABLE Agendamento (
  	AgendamentoID int,
    IndividualID int,
    TurmaID int,
	Titulo varchar(50),
  	DataInicio datetime,
    DataFim datetime,
  	PRIMARY KEY (AgendamentoID),
    FOREIGN KEY (IndividualID) REFERENCES Individual(IndividualID),
    FOREIGN KEY (TurmaID) REFERENCES Turma(TurmaID)
);

CREATE TABLE Treino (
  	TreinoID int,
    IndividualID int,
    TurmaID int,
    Nome varchar(50),
  	Descricao varchar(100),
  	Serie varchar(100),
  	PRIMARY KEY (TreinoID),
    FOREIGN KEY (IndividualID) REFERENCES Individual(IndividualID),
    FOREIGN KEY (TurmaID) REFERENCES Turma(TurmaID)
);
```
