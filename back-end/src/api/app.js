require('express-async-errors');
const cors = require('cors');

const express = require('express');

const userRouter = require('../routes/userRoutes');
const usersRouter = require('../routes/usersRoutes');
const sellersRouter = require('../routes/sellersRoutes');

const loginRouter = require('../routes/loginRoutes');

const salesRouter = require('../routes/salesRouter');

const ordersRouter = require('../routes/ordersRoutes');

const productsRouter = require('../routes/productsRoutes');

const errorMiddleware = require('../middlewares/error');

const app = express();

const accessControl = (_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
  res.header('Access-Control-Allow-Headers', '*');
  app.use(cors());
  next();
};

app.use(accessControl);
app.use(express.json());

app.get('/coffee', (_req, res) => res.status(418).end());
app.use('/login', loginRouter);
app.use('/register', userRouter);
app.use('/users', usersRouter);
app.use('/sellers', sellersRouter);
app.use('/', sellersRouter);
app.use('/sales', salesRouter);
app.use('/orders', ordersRouter);
app.use('/products', productsRouter);

app.use('/images', express.static('public'));

app.use(errorMiddleware);

module.exports = app;
