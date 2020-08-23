var express = require('express');
var logger = require('morgan');
var path = require('path');
var app = express();

app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('static', express.static(path.join(__dirname, 'public')));

app.listen(3000)
console.log('listening to port 3000');