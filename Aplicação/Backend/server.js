require('dotenv').config();

const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const alunoRoutes = require('./routes/aluno.routes');
const db = require('./config/db.config');

const app = express();
const PORT = 3001;

app.use(cors({
  origin: 'http://localhost:3001',
  credentials: true
}));

app.use(express.json());
app.use(session({
  secret: 'sua-chave-secreta',
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
  clientID: 'SUA_CLIENT_ID_DO_GOOGLE',
  clientSecret: 'SUA_CLIENT_SECRET_DO_GOOGLE',
  callbackURL: 'http://localhost:3001/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  db.execute('SELECT * FROM users WHERE google_id = ?', [profile.id])
    .then(([results]) => {
      if (results.length === 0) {
        const newUser = { google_id: profile.id, name: profile.displayName, email: profile.emails[0].value };
        return db.execute('INSERT INTO users SET ?', newUser)
          .then(([result]) => {
            newUser.id = result.insertId;
            done(null, newUser);
          });
      } else {
        done(null, results[0]);
      }
    })
    .catch(err => done(err));
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.execute('SELECT * FROM users WHERE id = ?', [id])
    .then(([results]) => done(null, results[0]))
    .catch(err => done(err));
});

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('http://localhost:3001');
  }
);

app.get('/api/auth/logout', (req, res) => {
  req.logout();
  res.redirect('http://localhost:3001');
});

app.use('/api/alunos', alunoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// const express = require('express');
// const cors = require('cors');
// const session = require('express-session');
// const passport = require('passport');
// const mysql = require('mysql2');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// const app = express();

// // Configuração do CORS
// app.use(cors({
//   origin: 'http://localhost:3001', // URL do frontend
//   credentials: true // Permitir credenciais (cookies, cabeçalhos de autorização)
// }));

// // Configurações do servidor
// app.use(express.json());
// app.use(session({
//   secret: 'sua-chave-secreta',
//   resave: false,
//   saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());

// // Configuração do banco de dados MySQL
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'Ad150104',
//   database: 'DBProjetoAPS'
// });

// db.connect(err => {
//   if (err) {
//     console.error('Erro ao conectar ao banco de dados:', err);
//   } else {
//     console.log('Conectado ao banco de dados MySQL');
//   }
// });

// // Configuração do Passport com Google OAuth
// passport.use(new GoogleStrategy({
//   clientID: 'SUA_CLIENT_ID_DO_GOOGLE',
//   clientSecret: 'SUA_CLIENT_SECRET_DO_GOOGLE',
//   callbackURL: 'http://localhost:5000/auth/google/callback'
// }, (accessToken, refreshToken, profile, done) => {
//   db.query('SELECT * FROM users WHERE google_id = ?', [profile.id], (err, results) => {
//     if (err) return done(err);
//     if (results.length === 0) {
//       const newUser = { google_id: profile.id, name: profile.displayName, email: profile.emails[0].value };
//       db.query('INSERT INTO users SET ?', newUser, (err, result) => {
//         if (err) return done(err);
//         newUser.id = result.insertId;
//         return done(null, newUser);
//       });
//     } else {
//       return done(null, results[0]);
//     }
//   });
// }));

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
//     if (err) return done(err);
//     done(null, results[0]);
//   });
// });

// // Rotas de autenticação
// app.get('/auth/google',
//   passport.authenticate('google', { scope: ['profile', 'email'] })
// );

// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/' }),
//   (req, res) => {
//     res.redirect('http://localhost:3001');
//   }
// );

// app.get('/api/auth/logout', (req, res) => {
//   req.logout();
//   res.redirect('http://localhost:3001');
// });

// // Rotas da API
// app.get('/api/alunos', (req, res) => {
//   db.query('SELECT * FROM alunos', (err, results) => {
//     if (err) return res.status(500).json({ error: 'Erro ao buscar alunos' });
//     res.json(results);
//   });
// });

// app.get('/api/turmas', (req, res) => {
//   db.query('SELECT * FROM turmas', (err, results) => {
//     if (err) return res.status(500).json({ error: 'Erro ao buscar turmas' });
//     res.json(results);
//   });
// });

// app.get('/api/agendamentos', (req, res) => {
//   db.query('SELECT agendamentos.*, alunos.nome AS aluno_nome, turmas.nome AS turma_nome FROM agendamentos LEFT JOIN alunos ON agendamentos.aluno_id = alunos.id LEFT JOIN turmas ON agendamentos.turma_id = turmas.id', (err, results) => {
//     if (err) return res.status(500).json({ error: 'Erro ao buscar agendamentos' });
//     res.json(results);
//   });
// });

// // Iniciar o servidor
// const PORT = 5000;
// app.listen(PORT, () => {
//   console.log('Servidor rodando na porta ${PORT}');
// });
