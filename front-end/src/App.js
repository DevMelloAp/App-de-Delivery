import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import Administrator from './Pages/Administrator';
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';
import Orders from './Pages/orders';
import Products from './Pages/Products';
import Register from './Pages/Register';
import SalesOrders from './Pages/SalesOrders';
import SalesOrdersById from './Pages/SalesOrdersById';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/seller/orders" element={ <SalesOrders /> } />
      <Route exact path="/seller/orders/:id" element={ <SalesOrdersById /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
      <Route exact path="/admin/manage" element={ <Administrator /> } />
      <Route exact path="/customer/order/:id" element={ <Orders /> } />
    </Routes>
  );
}

export default App;
