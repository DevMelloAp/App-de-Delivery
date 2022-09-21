import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Login from './Pages/Login';
import Products from './Pages/Products';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/costumer/products" element={ <Products /> } />
      <Route exact path="/login" element={ <Login /> } />
    </Routes>
  );
}

export default App;
