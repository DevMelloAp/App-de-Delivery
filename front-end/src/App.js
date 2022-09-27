import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import Checkout from './components/checkout';
import Login from './Pages/Login';
import Products from './Pages/Products';
import Register from './Pages/Register';
import Checkout from './Pages/Checkout';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
    </Routes>
  );
}

export default App;
