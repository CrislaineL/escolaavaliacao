const express = require('express');
const session = require('express-session');
const cors = require('cors');
const db = require('./db');


const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(session({ secret: 'chave-aleatoria', resave: false, saveUninitialized: false }));


// Rota de login
app.post('/api/login', async (req, res) => {
const { email, senha } = req.body;
// buscar professor por email e comparar senha (bcrypt.compare)
// se ok: req.session.professorId = id; res.json({ ok: true, nome })
res.status(501).json({ error: 'implementar lógica de autenticação' });
});


// CRUD turmas (exemplos)
app.get('/api/turmas', async (req, res) => {
// listar turmas do professor autenticado (usar req.session.professorId)
res.status(501).json({ error: 'implementar' });
});


// criar turma
app.post('/api/turmas', async (req, res) => {
res.status(501).json({ error: 'implementar' });
});


// excluir turma com verificação de atividades
app.delete('/api/turmas/:id', async (req, res) => {
res.status(501).json({ error: 'implementar' });
});


// atividades da turma
app.get('/api/turmas/:id/atividades', async (req, res) => {
res.status(501).json({ error: 'implementar' });
});


app.post('/api/turmas/:id/atividades', async (req, res) => {
res.status(501).json({ error: 'implementar' });
});


const port = process.env.PORT || 5000;
app.listen(port, () => console.log('API rodando na porta', port));