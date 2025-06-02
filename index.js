const express = require('express');
const morgan = require('morgan');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Welcome to Express App');
});

app.get('/error', (req, res, next) => {
  const err = new Error('Something went wrong!');
  err.status = 500;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
