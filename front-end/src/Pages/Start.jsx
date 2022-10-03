import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToLocalstorage } from '../utils/userLocalstorage';

function Start() {
  const currentRole = getToLocalstorage();
  if (currentRole && currentRole.role) {
    if (currentRole?.role === 'customer') return <Navigate to="/customer/products" />;
    if (currentRole?.role === 'seller') return <Navigate to="/seller/orders" />;
    if (currentRole?.role === 'administrator') return <Navigate to="/admin/manage" />;
  }

  return (
    <div>
      <Navigate to="/login" />
    </div>
  );
}

export default Start;
