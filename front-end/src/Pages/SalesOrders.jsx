import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SalesOrdersHeader from '../components/SalesOrdersHeader';
import SalesOrdersContent from '../components/SalesOrdersContent';
import { requestData } from '../utils/request';
import styles from '../styles/orders.module.css';

export default function SalesOrders() {
  const [orders, setOrders] = useState([]);
  const sellerEmail = useSelector((store) => store.user.email);

  const getOrders = async () => {
    const endpoint = `/sellers/orders?email=${sellerEmail}`;
    const data = await requestData(endpoint);
    setOrders(data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <SalesOrdersHeader />
      <div className={ styles.ordersPage }>
        {orders && orders.map((order) => (
          <SalesOrdersContent
            key={ order.id }
            id={ order.id }
            status={ order.status }
            date={ order.saleDate }
            price={ order.totalPrice }
            address={ order.deliveryAddress }
            addressNumber={ order.deliveryNumber }
          />
        ))}
      </div>
    </>
  );
}
