import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import { cartTotal } from '../utils/cartLocalsotorage';

export default function Checkout() {
  const cart = cartTotal();
  const [cartList, setCartList] = useState([cart]);

  useEffect(() => {
    if (!cart) return null;
    setCartList(cart);
  }, [cart]);

  return (
    <div>
      <Button
        href="/checkout"
        variant="contained"
        color="primary"
        data-testid="customer_products__checkout-bottom-value"
      >
        Ver Carrinho :
        {' '}
        {cartList}
        {' '}
        {}
      </Button>
    </div>
  );
}
