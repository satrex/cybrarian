var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var app = express();
var users;

app.use(express.static('build'));
app.use(bodyParser.json());
app.listen();
