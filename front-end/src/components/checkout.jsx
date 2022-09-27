import Button from '@material-ui/core/Button';
<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { cartTotal } from '../utils/cartLocalsotorage';

export default function Checkout() {
  const cart = cartTotal();
  const [cartList, setCartList] = useState([cart]);

  useEffect(() => {
    if (!cart) return null;
    setCartList(cart);
  }, [cart]);

=======
import { useEffect } from 'react';
// import { cartTotal } from '../utils/cartLocalsotorage';
import { useSelector } from 'react-redux';

export default function Checkout() {
  const cartTotal = useSelector((state) => state.default.total);
  console.log(cartTotal, 'cartTotal');
  useEffect(() => {

  }, [cartTotal]);
  // const cart = cartTotal();
>>>>>>> 4235e4289172e59488dfe7418a58f553eb4a4fca
  return (
    <div>
      <Button
        href="/customer/checkout"
        variant="contained"
        color="primary"
        data-testid="customer_products__checkout-bottom-value"
      >
<<<<<<< HEAD
        Ver Carrinho :
        {' '}
        {cartList}
        {' '}
        {}
=======

        <button
          type="button"
          disabled={ cartTotal === 0 }
          data-testid="customer_products__button-cart"
        >
          {(+cartTotal).toFixed(2).replace('.', ',')}
        </button>
>>>>>>> 4235e4289172e59488dfe7418a58f553eb4a4fca
      </Button>

    </div>
  );
}
