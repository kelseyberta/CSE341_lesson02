var express = require('express');
var bodyParser = require('body-parser');

const port = process.env.PORT || 8080;

const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');

const contactsRoutes = require('./routes/contacts');

var app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });
  

app.use('/', require('./routes'));


mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Server is running on Port ${port} and connected to DB`);
  }
});
