import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/orders.module.css';
import formatDate from '../utils/formatDate';

export default function SalesOrdersContent({ id,
  status, date, price, address, addressNumber }) {
  useEffect(() => {

  }, []);

  const navigate = useNavigate();

  const dataTestId = {
    id: `seller_orders__element-order-id-${id}`,
    status: `seller_orders__element-delivery-status-${id}`,
    date: `seller_orders__element-order-date-${id}`,
    price: `seller_orders__element-card-price-${id}`,
    address: `seller_orders__element-card-address-${id}`,
  };

  const renderInfos = () => (
    <>
      <span
        data-testid={ dataTestId.date }
        className={ styles.date }
      >
        {formatDate(date)}
      </span>
      <span
        data-testid={ dataTestId.price }
        className={ styles.price }
      >
        R$
        {' '}
        {price}
      </span>
    </>
  );

  return (
    <button
      type="submit"
      className={ styles.ordersPage__btn }
      onClick={ () => navigate(`/seller/orders/${id}`) }
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
            {renderInfos()}
          </div>
        </div>
        <div
          data-testid={ dataTestId.address }
          className={ styles.address }
        >
          {`${address}, ${addressNumber}`}
        </div>
      </div>
    </button>
  );
}

SalesOrdersContent.propTypes = {
  address: PropTypes.string.isRequired,
  addressNumber: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
