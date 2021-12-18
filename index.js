const express = require('express');
const app =  express();
const filmes = require('./src/data/filmes.json')
const cors = require('cors');

const port = process.env.PORT || 3000;


app.use(cors());

app.get('/', (req, res) => {
   
    res.send("Olá Diego")
});

app.listen(port, () => {
    console.log('servidor está rodando na porta: ' + port)
});