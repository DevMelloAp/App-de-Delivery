import React from 'react';
import SalesOrdersByIdContent from '../components/SalesOrdersByIdContent';
import SalesOrdersHeader from '../components/SalesOrdersHeader';

export default function SalesOrdersById() {
  return (
    <>
      <SalesOrdersHeader />
      <SalesOrdersByIdContent />
    </>
  );
}
