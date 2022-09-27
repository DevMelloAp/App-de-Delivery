import Button from '@material-ui/core/Button';
import { cartTotal } from '../utils/cartLocalsotorage';

export default function Checkout() {
  const cart = cartTotal();
  return (
    <div>
      <Button
        href="/customer/checkout"
        variant="contained"
        color="primary"
        data-testid="customer_products__checkout-bottom-value"
      >
        Ver Carrinho :
        {' '}
        {cart}
        {' '}
        {}
      </Button>
    </div>
  );
}
