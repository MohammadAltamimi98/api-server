'use strict';
const morgan = require('morgan');

const express = require('express');
const cors = require('cors');
const app = express();
const clothesRouter = require('./routes/clothes');
const foodRouter = require('./routes/food');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
app.use(cors());
app.use(express.json());


app.use(express());


app.use('/api/v1/food', foodRouter);
app.use('/api/v1/clothes', clothesRouter);


app.get('/', (req, res) => {
  res.send('Hello World!')
})




app.use('*', notFoundHandler);
app.use(errorHandler);












module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => console.log(`up and running on ${port}`));
  },
};