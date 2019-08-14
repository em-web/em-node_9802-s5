
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

require('./middlewares')(app);

require('./routes')(app);

require('./services/errorHandler')(app);



module.exports = app;
