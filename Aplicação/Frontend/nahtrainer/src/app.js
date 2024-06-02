import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Routes } from './routes';

// Pages
import Alunos from './pages/Alunos';
import Individual from './pages/Individual';
import Turmas from './pages/Turmas';
import Treinos from './pages/Treinos';
import Agendamentos from './pages/Agendamentos';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import Perfil from './pages/Perfil';

// Components
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

const App = () => {
  return (
    <Router>
      <Sidebar />
      <main className="content">
        <Navbar />
        <Preloader />
        <Switch>
          <Route exact path={Routes.Login.path} component={Login} />
          <Route exact path={Routes.Cadastrar.path} component={Cadastrar} />
          <Route exact path={Routes.Perfil.path} component={Perfil} />
          <Route exact path={Routes.Alunos.path} component={Alunos} />
          <Route exact path={Routes.Individual.path} component={Individual} />
          <Route exact path={Routes.Turmas.path} component={Turmas} />
          <Route exact path={Routes.Treinos.path} component={Treinos} />
          <Route exact path={Routes.Agendamentos.path} component={Agendamentos} />
          <Redirect to={Routes.NotFound.path} />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
};

export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
// import Footer from './components/Footer';
// import Alunos from './pages/Alunos';
// import Turmas from './pages/Turmas';
// import Agendamentos from './pages/Agendamentos';
// import Login from './pages/Login';
// import "./scss/volt.scss";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <Sidebar />
//       <Switch>
//         <Route path="/" exact>
//           <h1>Bem-vindo ao Sistema de Gerenciamento de Treinos</h1>
//         </Route>
//         <Route path="/pages/Alunos.js" component={Alunos} />
//         <Route path="/pages/Turmas.js" component={Turmas} />
//         <Route path="/pages/Agendamentos.js" component={Agendamentos} />
//         <Route path="/pages/examples/Signin.js" component={Login} />
//       </Switch>
//       <Footer />
//     </Router>
//   );
// };

// export default App;