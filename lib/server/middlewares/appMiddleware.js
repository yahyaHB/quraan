'use strict';

var morgan = require('morgan');
var bodyParser = require('body-parser');
var logger = require('./logger.js');
var path = require('path');

module.exports = function (app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.static(path.join(__dirname, '../../../public')));
  app.use(bodyParser.json());
  app.use(logger);
};