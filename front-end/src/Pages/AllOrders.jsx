import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import { requestData } from '../utils/request';
import OrdersCard from '../components/OrderCard';

function AllOrders() {
  const [orders, setOrders] = useState();
  useEffect(() => {
    async function fetchData() {
      try {
        const fetch = await requestData('/orders');
        setOrders(fetch);
        console.log(fetch);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div>
        { orders ? orders.map((order) => (
          <div key={ order.id }>
            <OrdersCard
              pedido={ order.id }
              status={ order.status }
              data={ order.saleDate }
              totalPrice={ order.totalPrice }
              id={ order.id }
            />
          </div>
        )) : null }
      </div>
    </div>
  );
}

export default AllOrders;
