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

## Sobre o projeto

Este projeto foi desenvolvido para a disciplina de Análise e Projeto de Sistemas, que faz parte da grade curricular do bacharelado em Ciência da Computação do Centro Universitário de João Pessoa (Unipê). A aplicação web Nah Trainer tem como objetivo principal auxiliar o gerenciamento e a otimização dos processos de trabalho de personal trainers, priorizando uma experiência de usuário agradável e prática.

**Dica**: Para visualizar mais informações relacionados à ideação e ao processo de desenvolvimento, acesse **[documentação](https://github.com/alessaduarte/projeto-aps/tree/main/Documentação)**.

### Autoras

| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/100052794?v=4" width=115><br><sub>Alessa Duarte</sub>](https://github.com/alessaduarte) |  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/107078395?v=4" width=115><br><sub>Beatriz Emmanuele</sub>](https://github.com/BeatrizEmmanuele) | |
| :---: | :---: | :---: |

## Instalação

### Pré-Requisitos

Antes de iniciar a instalação do projeto, verifique se estas ferramentas já estão instaladas:
- **[Git](https://www.git-scm.com)**
- **[Node.js](https://nodejs.org/en)**

**Dica**: Para facilitar o desenvolvimento e visualização do projeto, recomendamos utilizar um editor de código como o **[Visual Studio Code](https://code.visualstudio.com)**.

## Etapas de Instalação

### 1. Clonar o repositório

Crie uma pasta para salvar o projeto e execute no terminal: 

```bash
git clone https://github.com/alessaduarte/projeto-aps.git
```

### 2. Instale as dependências

- **Back-end:**
<p>Navegue até o diretório back-end utilizando o comando:</p>

```bash
cd Aplicação/Backend
```
<p>Verifique se está no diretório correto e instale:</p>

1. Express:
```bash
npm install express
```
2. Cors:
```bash
npm install cors
```
3. Body-Parser:
```bash
npm install body-parser
```
4. MySQL2:
```bash
npm install mysql2
```
5. DotEnv:
```bash
npm install dotenv
```

<br />

- **Front-end:**
<p>Navegue até o diretório front-end utilizando o comando:</p>

```bash
cd Aplicação/Frontend/nahtrainer
```

<p>Verifique se está no diretório correto e utilize os comandos:</p>

```bash
npm install
```
```bash
npm install react-big-calendar
```

<br />

- **Downgrade da versão do Node.js:**
Para executar o projeto, é necessário alterar a versão do node.js instalada na sua máquina.

Procedimentos:
1. Instale o gerenciador de versões NVM
- **[Linux/MacOS](https://github.com/nvm-sh/nvm)**
- **[Windows](https://github.com/coreybutler/nvm-windows)**

2. Digite os comandos no cmd:
```cmd
nvm install 14.21.3
nvm use 14.21.3
```


### 3. Configuração e Inicialização

- **Back-End:**

<p>Configure o seu arquivo .env com as váriaveis de ambiente, preencha de acordo com as informações do seu banco de dados:</p>

```.env
DB_USER=''
DB_PASSWORD=''
```

<p>Inicialize o back-end utilizando:</p>

```bash
node server.js
```

<br />

- **Front-End:**

<p>Inicialize o projeto React com o comando:</p>

```bash
npm start
```

## Estrutura de Pastas Principais

```
.
├── Aplicação
│   ├── Backend
│   │   └── server.js
│   └── Frontend
│       └── nahtrainer
├── Artefatos
└── Documentação
```
