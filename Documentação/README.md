<h1 align="center">
    Projeto de Gerenciamento de Personal Trainer
    <br />
    <br />
    <a href="">
      <img src="https://github.com/alessaduarte/projeto-aps/assets/100052794/992b17e9-9a2f-48e6-a751-b74ccd500d02" alt="Banner Nah Trainer">
    </a>
  </h1>
</div>

# Documentação

Documentação abrangendo a fase de ideação, definição de escopo, levantamento de requisitos e informações adicionais relacionadas ao desenvolvimento, como por exemplo, as ferramentas utilizadas para organização, recursos utilizados para estudo e planos de negócio.

**Dica**: Para visualizar os artefatos utilizados no projeto, acesse **[documentação](https://github.com/alessaduarte/projeto-aps/tree/main/Artefatos)**.

## Levantamento de Requisitos

### Requisitos Funcionais

| ID      | Descrição do Requisito |
| ----------- | ----------- |
| RF001      | Autenticação de usuários que possibilita o acesso a outras funções da aplicação.      |
| RF002   | Cadastro de alunos e suas informações pessoais e de matrícula para controle.        |
| RF003   | Gerenciamento de alunos que possibilita administrar suas informações individuais e cadastra-los em turmas, caso necessário.       |
| RF004   | Criação de um banco de dados de treinos que permite que o usuário selecione treinos pré-existentes e adicione outros.        |
| RF005   | Gerenciamento de treinos para alunos individuais ou em turmas.        |
| RF006   | Personalização de exercícios com alterações de séries, repetições e tempo de descanso, por exemplo.        |

<br />

### Requisitos Não Funcionais

| ID      | Descrição do Requisito |
| ----------- | ----------- |
| RF001      | Desempenho      |
| RF002   | Segurança        |
| RF003   | Usabilidade       |
| RF004   | Interoperabilidade        |
| RF005   | Manutenabilidade        |
| RF006   | Confiabiliade        |

<br />

## Definição do escopo e documentação de requisitos do projeto

### Identificação de Stakeholders
- Personal Trainers

<br />

### Histórias de Usuário

**1. Login/Cadastro**

Como personal trainer, eu quero fazer login na aplicação e ter acesso ao gerenciamento de alunos e outras funcionalidades.

**2. Cadastro de Alunos**

Como personal trainer, eu quero cadastrar novos alunos e ter a possibilidade de visualizar as informações de matrícula e gerenciar os treinos e o progresso dos alunos durante as aulas.

**3. Planejamento de Treinos**

Como personal trainer, eu quero ter a possibilidade de criar treinos personalizados para os alunos.

<br />

### Critérios de Aceitação

**1. Autenticação**
- A aplicação deve permitir que a entrada de nome, e-mail e senha para cadastro de usuários.
- A autenticação deverá ser feita utilizando as credenciais fornecidades anteriormente, especificamente e-mail e senha.

**2. Mensagens de Feedback**
- Caso o cadastro seja bem sucedido, a aplicação deve exibir uma mensagem de "Cadastro realizado com sucesso!".
- Caso as informações de login estejam incorretas, a aplicação exibirá a mensagem de erro "E-mail ou senha incorretos".

**3. Segurança**
- As senhas devem ser armazenadas no banco de dados utilizando um algoritmo de hash seguro.
- A sessão do usuário deve ser protegida por HTTPS.

**4. Entrada de Dados**
- A aplicação deve permitir que o usuário insira nome, data de nascimento, telefone, data de matrícula e o tipo de aula (individual ou em turma).
- Todos os campos obrigatórios devem ser validados, caso não estejam corretos, a aplicação deve exibir mensagens de erro específicas para cada campo.

**5. Gerenciamento de Treinos**
- A aplicação deve permitir que o usuário escolha treinos de uma seleção pré-existente ou que adicione novos.
- O cadastro de novos treinos precisa incluir obrigatoriamente o título do treino, uma descrição e a quantidade de séries.

<br />

### Cenários de Uso

**1. Cadastro de Alunos**
**Contexto:** O usuário deseja cadastrar um novo aluno na aplicação.
**Passos para Execução:**
- O usuário deve clicar no ícone de "+" acima da tabela de alunos matriculados para abrir o formulário.
- O usuário deve preencher o formulário com as informações solicitadas.
- O usuário deve clicar em "Salvar" para efetuar o cadastro, caso contrário, deve usar o botão "Cancelar" para interromper o processo.
**Exceções:**
- Caso o formulário não seja preenchido corretamente, a aplicação exibirá mensagens de erro indicando qual é o problema.

**2. Cadastro de Treinos**
**Contexto:** O usuário deseja criar um novo plano de treino para um aluno individual ou uma turma.
**Passos para Execução:**
- O usuário deve clicar no ícone de "+" acima da tabela de treinos pré-existentes para abrir o formulário de cadastro.
- O usuário deve preencher o formulário com as informações solicitadas.
- O usuário deve clicar em "Salvar" para efetuar o cadastro, caso contrário, deve usar o botão "Cancelar" para interromper o processo.
**Exceções:**
- Caso o formulário não seja preenchido corretamente, a aplicação exibirá mensagens de erro indicando qual é o problema.

<br />

## Protótipos de Tela e Regras de Negócio

### Protótipos de Tela
Protótipos de alta fidelidade e style guide com informações de tipografia, paleta de cores e iconografia do projeto.
O protótipo está disponível para visualização no figma, **[clique aqui](https://www.figma.com/design/PDvUEhOJOphqjxoWCjtlip/Projeto-APS?node-id=0-1&t=wWiBBuv35VbL2Nkx-1)** para acessar.

<img src="https://github.com/alessaduarte/projeto-aps/assets/100052794/e994e28f-baa6-4168-85c7-28ada0a6789a" alt="Protótipos de Tela">

<br />

### Regras de Negócio

| ID      | Título | Descrição     |
| ----        |    ------   |         ----- |
| RN001      | Autenticação de Usuário       | Acesso apenas a usuários autenticados.   |
| RN002   | Cadastro de Alunos       | Cadastro de novos alunos com dados obrigatórios e a possibilidade de alterações e exclusão de informações.       |
| RN003   | Cálculo de Idade        | Cálculo da idade com base na data de nascimento fornecida.      |
| RN004   | Gerenciamento de Turmas        | Criação e gerenciamento de turmas, incluindo as opções de adicionar e remover alunos.      |
| RN005   | Planejamento de Treinos        | Planejamento de treinos utilizando pré-existentes ou adicionando novos, seguindo as informações solicitadas pelo formulário de cadastro.      |
| RN006   | Agendamentos        | Criação e visualização de agendamentos em formato de calendário ou agenda.      |
