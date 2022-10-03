import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Administrator from './Pages/Administrator';
import AllOrders from './Pages/AllOrders';
import Checkout from './Pages/Checkout';
import Login from './Pages/Login';
import Orders from './Pages/Orders';
import Products from './Pages/Products';
import Register from './Pages/Register';
import SalesOrders from './Pages/SalesOrders';
import SalesOrdersById from './Pages/SalesOrdersById';
import Start from './Pages/Start';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Start /> } />
      <Route exact path="/customer/products" element={ <Products /> } />
      <Route exact path="/seller/orders" element={ <SalesOrders /> } />
      <Route exact path="/seller/orders/:id" element={ <SalesOrdersById /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/register" element={ <Register /> } />
      <Route exact path="/customer/checkout" element={ <Checkout /> } />
      <Route exact path="/customer/orders/:id" element={ <Orders /> } />
      <Route exact path="/customer/orders" element={ <AllOrders /> } />
      <Route exact path="/admin/manage" element={ <Administrator /> } />
    </Routes>
  );
}

export default App;
