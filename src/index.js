const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://fabiano:141501@cluster0-x0gzq.mongodb.net/ominstack10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(
    cors(),
    express.json(), 
    routes
)

app.listen(3333);