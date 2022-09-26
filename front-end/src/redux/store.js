const { configureStore } = require('@reduxjs/toolkit');
const counterReducer = require('./actions/actions');

const store = configureStore({

  reducer: {
    counter: counterReducer,
  },
});

module.exports = { store };
