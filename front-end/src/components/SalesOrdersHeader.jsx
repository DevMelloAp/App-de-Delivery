import React from 'react';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/header.module.css';
import { getToLocalstorage, removeToLocalstorage } from '../utils/userLocalstorage';

export default function SalesOrdersHeader() {
  const { name } = getToLocalstorage();
  const navigate = useNavigate();

  return (
    <header>
      <nav className={ styles.header }>
        <ul className={ styles.settings }>
          <Button
            variant="contained"
            color="primary"
            data-testid="customer_products__element-navbar-link-orders"
            onClick={ () => navigate('/customer/products') }
          >
            PEDIDOS
          </Button>
          <span
            variant="contained"
            color="primary"
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {name}
          </span>

          <Button
            variant="contained"
            color="primary"
            href="/login"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ () => { removeToLocalstorage(); } }
          >
            LOGOUT

          </Button>
        </ul>
      </nav>
    </header>

  );
}
