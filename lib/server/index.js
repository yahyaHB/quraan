'use strict';

require('env2')('config.env');
var path = require('path');
var express = require('express');
var app = express();

require('./middlewares/appMiddleware')(app, express);

app.use('/*', express.static(path.join(__dirname, '..', '..', 'public', 'index.html')));
app.listen(process.env.PORT || 3000, function () {
  console.log('server runs on 3000');
});
app.use(function (err, req, res, next) {
  throw err;
  res.status(401).send(err);
  next();
});
app.use(function (err, req, res, next) {
  throw err;
  res.status(500).send('Something broke!');
  next();
});