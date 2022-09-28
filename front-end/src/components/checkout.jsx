import Button from '@material-ui/core/Button';
import { useEffect } from 'react';
// import { cartTotal } from '../utils/cartLocalsotorage';
import { useSelector } from 'react-redux';

export default function Checkout() {
  const cartTotal = useSelector((state) => state.product.total);
  console.log(cartTotal, 'cartTotal');
  useEffect(() => {

  }, [cartTotal]);
  // const cart = cartTotal();
  return (
    <div>
      <Button
        href="/customer/checkout"
        variant="contained"
        color="primary"
        data-testid="customer_products__checkout-bottom-value"
      >

        <button
          type="button"
          disabled={ cartTotal === 0 }
          data-testid="customer_products__button-cart"
        >
          {(+cartTotal).toFixed(2).replace('.', ',')}
        </button>
      </Button>

    </div>
  );
}
