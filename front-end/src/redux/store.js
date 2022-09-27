const { configureStore } = require('@reduxjs/toolkit');
const cartReducer = require('./actions/actions');

const store = configureStore({
  reducer: cartReducer,
});

module.exports = { store };
