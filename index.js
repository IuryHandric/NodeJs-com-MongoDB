const express = require('express');
const exphbs = require('express-handlebars');
require('dotenv').config();

const port = process.env.PORT || 3006
const app = express();

const conn = require('./db/conn')

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json());


app.listen(() => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})