const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://fabiano:141501@cluster0-x0gzq.mongodb.net/ominstack10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json(), routes) // permitindo JSON na aplicação com Express
//app.use(routes) // vinculando as rotas no index.js

/***
 * Métodos HTTP => GET, POST, PUT & DELETE
 * 
 * Tipos de Parâmetros:
 * Query Params: request.query (Filtros, Ordenação, Paginação => queries embutidas na URL de requisição)
 * Route Params: request.params (Identificar um recurso na alteração/remoção)
 * Body: request.body (dados para criação aou alteração de um registro => POST/PUT)
 */

app.listen(3333);