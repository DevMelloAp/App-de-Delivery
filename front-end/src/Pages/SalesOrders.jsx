import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import OrdersHeader from '../components/SalesOrdersHeader';
import OrdersContent from '../components/SalesOrdersContent';
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
      <OrdersHeader />
      <div className={ styles.ordersPage }>
        {orders && orders.map((order) => (
          <OrdersContent
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
