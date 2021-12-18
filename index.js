const express = require('express');
const app =  express();
const filmes = require('./src/data/filmes.json')
const cors = require('cors');


const port = process.env.PORT || 3000;

app.use(cors())

app.get('/filmes', (req, res) => {
    return res.json(filmes);
});

app.listen(port, () => {
    console.log('servidor está rodando na porta: ' + port)
});