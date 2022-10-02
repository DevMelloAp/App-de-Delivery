import Button from '@material-ui/core/Button';
import { useEffect } from 'react';
// import { cartTotal } from '../utils/cartLocalsotorage';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const cartTotal = useSelector((state) => state.product.total);
  // const cart = useSelector((state) => state.product.cart);
  // console.log(cart);
  // const history = useHistory();
  const navigate = useNavigate();
  useEffect(() => {

  }, [cartTotal]);
  // const cart = cartTotal();
  return (
    <div>
      <Button
        // href="/customer/checkout"
        onClick={ () => navigate('/customer/checkout') }
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
