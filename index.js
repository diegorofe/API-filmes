const express = require('express');
const app =  express();
const filmes = require('./src/data/filmes.json')


const port = process.env.PORT || 3000;

app.get('/filmes', (req, res) => {
    return res.json(filmes);
});

app.listen(port, () => {
    console.log('servidor está rodando na porta: ' + port)
});