import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import styles from '../styles/orders.module.css';

export default function OrdersContent(props) {
  useEffect(() => {

  }, []);

  const { pedido, status, totalPrice, address, saleDate } = props;

  return (
    <div
      className={ styles.ordersPage }
    >
      <div className={ styles.orderStatus }>
        <div
          className={ styles.pedido }
          data-testid={ `seller_orders__element-order-id-${pedido}` }
        >
          Pedido:
          {pedido}
        </div>
        <div className={ styles.infos }>
          <div
            data-testid={ `seller_orders__element-delivery-status-${pedido}` }
            className={ styles.status }
          >
            {status}
          </div>

          <div
            data-testid={ `seller_orders__element-order-date-${pedido}` }
            className={ styles.date }
          >
            {saleDate}
          </div>
          <div
            data-testid={ `seller_orders__element-card-price-${pedido}` }
            className={ styles.price }
          >
            R$
            {' '}
            {totalPrice}

          </div>
          <div
            data-testid={ `seller_orders__element-card-address-${pedido}` }
            className={ styles.address }
          >
            {address}
          </div>
        </div>
      </div>
    </div>
  );
}

OrdersContent.propTypes = {
  address: PropTypes.string.isRequired,
  pedido: PropTypes.number.isRequired,
  saleDate: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
};
