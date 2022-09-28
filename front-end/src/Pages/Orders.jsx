import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import OrdersHeader from '../components/OrdersHeader';
import OrdersContent from '../components/OrdersContent';
import { requestData } from '../utils/request';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const sellerEmail = useSelector((store) => store.user.email);

  const getOrders = async () => {
    const endpoint = `/sales/orders?email=${sellerEmail}`;
    const data = await requestData(endpoint);
    setOrders(data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <OrdersHeader />
      {orders && orders.map((order) => (
        <OrdersContent
          key={ order.id }
          pedido={ order.id }
          status={ order.status }
          totalPrice={ order.totalPrice }
          address={ `${order.deliveryAddress}, ${order.deliveryNumber}` }
          saleDate={ order.saleDate }
        />
      ))}
    </>
  );
}
