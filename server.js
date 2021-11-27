const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const router = require('./components/routes/register');
const user ='db_user_juanchs';
const pass = '3nNmpztgaAaHJwq';
const host = 'myCluster.mongodb.net';
const database = 'FORMPLM';
const mongoUri = `mongodb+srv://${user}:${pass}@${host}/${database}?retryWrites=true&w=majority`
db("mongodb+srv://db_user_juanchs:3nNmpztgaAaHJwq@cluster0.uwiox.mongodb.net/FORMPLM?retryWrites=true&w=majority");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicaciÃ³n estÃ¡ escuchando en http://localhost:3000');