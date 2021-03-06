const path = require('path');
const express = require('express');
const app = express();

require('./middlewares/appMiddleware')(app, express);

app.use('/*', express.static(path.join(__dirname,'..','..','public','index.html')));
app.listen(process.env.PORT || 3000, () => {
  console.log('server runs on 3000');
});
app.use((err, req, res, next) => {
  throw err;
  res.status(401).send(err);
  next();
});
app.use((err, req, res, next) => {
  throw err;
  res.status(500).send('Something broke!');
  next();
});
