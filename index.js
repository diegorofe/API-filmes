const express = require('express');
const app =  express();
const filmes = require('./src/data/filmes.json')

//permite acesso, configurando as urls que são permitidas para acessar a aplicação
const cors = require('cors');


const port = process.env.PORT || 3000;

app.use(cors({origin: 'https://api-filmes-nodejs.herokuapp'}))

app.get('/filmes', (req, res) => {
    return res.json(filmes);
});

app.listen(port, () => {
    console.log('servidor está rodando na porta: ' + port)
});