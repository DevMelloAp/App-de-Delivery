import React, { useEffect } from 'react';
import styles from '../styles/orders.module.css';

export default function OrdersContent() {
  useEffect(() => {

  }, []);

  return (
    <div className={ styles.ordersPage }>
      <div className={ styles.orderStatus }>
        <div>
          Pedido Number
        </div>
        <div>
          <div>STATUS: Pendente</div>
          <div>
            <div>DATE</div>
            <div>PRICE</div>
          </div>
        </div>
        <span>Endereço</span>
      </div>
      <div className={ styles.orderStatus }>
        <div>
          Pedido Number
        </div>
        <div>
          <div>STATUS: Preparando</div>
          <div>
            <div>DATE</div>
            <div>PRICE</div>
          </div>
        </div>
        <span>Endereço</span>
      </div>
      <div className={ styles.orderStatus }>
        <div>
          Pedido Number
        </div>
        <div>
          <div>STATUS: Entregue</div>
          <div>
            <div>DATE</div>
            <div>PRICE</div>
          </div>
        </div>
        <span>Endereço</span>
      </div>
    </div>
  );
}
