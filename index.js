const express = require('express');
const app =  express();
const filmes = require('./src/data/filmes.json')

//permite acesso, configurando as urls que são permitidas para acessar a aplicação
const cors = require('cors');
const { json } = require('express/lib/response');


const port = process.env.PORT || 3000;

//acesso livre. sem parâmetros de urls
app.use(cors())

//LISTA TODOS OS FILMES
app.get('/filmes', (req, res) => {
    return res.json(filmes);
});

/*
//FILTRO POR INDICE DO ARRAY
app.get('/filmes/:index', (req, res) => {
    const { index } = req.params;
    
    return res.json(filmes[index - 1]);
});
*/

//GET BY ID
app.get('/filmes/:id', (req, res) => {
    const { id } = req.params;
       
    let filtroFilmes = filmes.filter( (item) => {
        return (item.id == id);
    });

    return res.json(filtroFilmes)
});

app.listen(port, () => {
    console.log('servidor está rodando na porta: ' + port)
});