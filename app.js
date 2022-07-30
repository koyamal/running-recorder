const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'running_recorder'
});

connection.connect((err) => {
    if (err) {
      console.log('Error Connecting: ' + err.stack);
      return;
    }
    console.log('Connection Successfully!');
});

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.get('/datainput', (req, res) =>{
    res.render('datainput.ejs');
});

app.post('/datainput', (req, res) =>{
    console.log(req.body);
    const date = req.body.date;
    const distance = req.body.dist;
    const hour = req.body.hour || 0;
    const min = req.body.min;
    const sec = req.body.sec;
    const hb_ave = req.body.hb_ave || null;
    const hb_max = req.body.hb_max || null;

    connection.query(
        'INSERT INTO activities (date, distance, hour, min, sec, hb_ave, hb_max) values (?, ?, ?, ?, ?, ?, ?)',
        [date, distance, hour, min, sec, hb_ave, hb_max],
        (error, results) =>{
            console.log(results);
            console.log(error);
            res.redirect('/');
          }
    );
});

app.listen(3000);
