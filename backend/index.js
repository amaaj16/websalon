'use strict'
var express = require('express');
var bodyParser=require('body-parser');
var mongoose = require('mongoose');
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
  console.log(req.params);
  res.status(200).send({user:'alex'})
});



mongoose.connect('mongodb+srv://amaaj16:egZYxuHRJXcWbzbN@cluster0-s1gai.mongodb.net/elquijote_db?retryWrites=true',(err,res)=>{
  if(err) throw err
  console.log("conexion establecida con la base de datos");
})

app.listen(port,()=> {
  console.log(`Example app listening on port ${port}!`);
});
