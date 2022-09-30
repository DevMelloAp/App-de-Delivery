import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styles from '../styles/orderCard.module.css';
import formatDate from '../utils/formatDate';

function OrdersCard(props) {
  const navigate = useNavigate();

  const { pedido, status, data, totalPrice, id } = props;

  const Redirect = () => navigate(`/customer/orders/${id}`);

  return (
    <Grid
      container
      component={ Paper }
      sx={ { cursor: 'pointer' } }
      onClick={ Redirect }
    >
      <div className={ styles.orderCard }>
        <div data-testid={ `customer_orders__element-order-id-${id}` }>
          { pedido }
        </div>

        <div data-testid={ `customer_orders__element-delivery-status-${id}` }>
          { status }
        </div>
        <div data-testid={ `customer_orders__element-order-date-${id}` }>
          { formatDate(data) }
        </div>
        <div data-testid={ `customer_orders__element-card-price-${id}` }>
          { totalPrice.replace(/\./, ',') }
        </div>
      </div>
    </Grid>
  );
}

OrdersCard.propTypes = {
  pedido: PropTypes.node.isRequired,
  status: PropTypes.node.isRequired,
  data: PropTypes.node.isRequired,
  totalPrice: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
};

export default OrdersCard;
