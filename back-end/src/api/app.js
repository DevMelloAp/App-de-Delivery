require('express-async-errors');
const express = require('express');
const loginRouter = require('../routes/userRoutes');

const errorMiddleware = require('../middlewares/error');

const app = express();
app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRouter);

app.use(errorMiddleware);
module.exports = app;
