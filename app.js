const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/datainput', (req, res) =>{
    res.render('datainput.ejs');
});

app.post('/datainput', (req, res) =>{
    console.log(req.body);
    res.render('index.ejs');
});

app.listen(3000);
