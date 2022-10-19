require('dotenv').config();

const express = require('express');
const Youch = require('youch');

const { errors } = require('celebrate');

require('express-async-errors');

const routes = require('../infra/routes');

const app = express();

const port = 3333;

app.use(express.json());

app.use(routes);

app.use(errors());

//controla o error
app.use(async (error, request, response, next) => {
  const errors = await new Youch(error, request).toJSON();

  return response.status(errors.error.status || 500).json({
    error: {
      code: errors.error.status || 500,
      message: errors.error.message,
    },
  });
});

app.listen(port, () => console.log(`rodando na porta ${port} clã`));
