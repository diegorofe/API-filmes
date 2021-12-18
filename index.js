const express = require('express');
const server =  express();
const filmes = require('./src/data/filmes.json')
const cors = require('cors');


server.use(cors());

server.get('/filmes', (req, res) => {
    return res.json(filmes)
});

server.listen(3000, () => {
    console.log('servidor está funcionando')
});