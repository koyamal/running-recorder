const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/datainput', (req, res) =>{
    res.render('datainput.ejs');
});

app.listen(3000);
