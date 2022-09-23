import React from 'react';
import styles from '../styles/header.module.css';

export default function Header() {
  const user = localStorage.getItem('user');
  return (
    <header>
      <nav className={ styles.header }>
        <ul className={ styles.settings }>
          <li
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {JSON.parse(user).name}
          </li>

          <li
            href="/orders"
            data-testid="customer_products__element-navbar-link-orders"
          >
            MEUS PEDIDOS

          </li>
          <li
            href="customer/products"
            data-testid="customer_products__element-navbar-link-products"
          >
            PRODUTOS

          </li>
          <li
            href="/logout"
            data-testid="customer_products__element-navbar-link-logout"
          >
            LOGOUT

          </li>
        </ul>
      </nav>
    </header>

  );
}
