import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import styles from '../styles/orders.module.css';

export default function OrdersContent({ id,
  status, date, price, address, addressNumber }) {
  useEffect(() => {

  }, []);

  const dataTestId = {
    id: `seller_orders__element-order-id-${id}`,
    status: `seller_orders__element-delivery-status-${id}`,
    date: `seller_orders__element-order-date-${id}`,
    price: `seller_orders__element-card-price-${id}`,
    address: `seller_orders__element-card-address-${id}`,
  };

  return (
    <div
      className={ styles.ordersPage }
    >
      <div className={ styles.orderStatus }>
        <div
          className={ styles.pedido }
          data-testid={ dataTestId.id }
        >
          Pedido:
          {id}
        </div>
        <div className={ styles.infos }>
          <div
            data-testid={ dataTestId.status }
            className={ styles.status }
          >
            {status}
          </div>
          <div className={ styles.datePrice }>
            <span
              data-testid={ dataTestId.date }
              className={ styles.date }
            >
              {date}
            </span>
            <span
              data-testid={ dataTestId.price }
              className={ styles.price }
            >
              R$
              {' '}
              {price}
            </span>
          </div>
        </div>
        <div
          data-testid={ dataTestId.address }
          className={ styles.address }
        >
          {`${address}, ${addressNumber}`}
        </div>
      </div>
    </div>
  );
}

OrdersContent.propTypes = {
  address: PropTypes.string.isRequired,
  addressNumber: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
