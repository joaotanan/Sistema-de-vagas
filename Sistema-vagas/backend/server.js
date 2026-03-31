const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// "Banco de dados" temporário
let jobs = [];

// 🔍 LISTAR VAGAS
app.get('/jobs', (req, res) => {
    res.json(jobs);
});

// ➕ CRIAR VAGA
app.post('/jobs', (req, res) => {
    const { title, company } = req.body;

    const newJob = {
        id: Date.now(),
        title,
        company
    }; const express = require('express');
    const app = express();
    const PORT = 3000;

    app.use(express.json());

    // "Banco de dados" temporário
    let jobs = [];

    // 🔍 LISTAR VAGAS
    app.get('/jobs', (req, res) => {
        res.json(jobs);
    });

    // ➕ CRIAR VAGA
    app.post('/jobs', (req, res) => {
        const { title, company } = req.body;

        const newJob = {
            id: Date.now(),
            title,
            company
        };

        jobs.push(newJob);
        res.json(newJob);
    });

    // ❌ DELETAR VAGA
    app.delete('/jobs/:id', (req, res) => {
        const id = req.params.id;
        jobs = jobs.filter(job => job.id != id);
        res.json({ message: 'Vaga removida' });
    });

    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
