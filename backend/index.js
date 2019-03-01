'use strict'
var express = require('express');
var bodyParser=require('body-parser');
var app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

app.get('/user/:id', function (req, res, next) {
  res.send('USER');
});

app.get('/', (req, res) =>{
  res.json(respuesta);
});
const respuesta = {
  name: "ok",
  title: "page"
}
app.listen(port,()=> {
  console.log(`Example app listening on port ${port}!`);
});
