const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const session = require('express-session');
app.use(express.static('public'));

app.use(
  session({
    secret: 'my_secret_key',
    resave: false,
    saveUninitialized: false,
  })
);
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
        (error, results) => {
          if(error){
            console.log(error);
          }
          console.log(results);
          res.redirect('/');
          }
    );
});

app.get('/showdata', (req, res) =>{
    connection.query(
        'SELECT * FROM activities',
        [],
        (error, results) =>{
          if(error){
            console.log(error);
          }
          console.log(results);
          // console.log(results[0]['id']);
          res.render('showactivities.ejs', {results});
        }
    );
})

// localhost 3000port
app.listen(3000);
