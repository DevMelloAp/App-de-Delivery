import Button from '@material-ui/core/Button';
import React from 'react';
import styles from '../styles/header.module.css';
import { getToLocalstorage, removeToLocalstorage } from '../utils/userLocalstorage';

export default function Header() {
  const { name } = getToLocalstorage();
  return (
    <header>
      <nav className={ styles.header }>
        <ul className={ styles.settings }>
          <Button
            variant="contained"
            color="primary"
            href="/customer/products"
            data-testid="customer_products__element-navbar-link-orders"
          >
            GERECIAR USUÀRIOS

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
