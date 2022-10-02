import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/header';
import { getOrderByUser } from '../utils/request';
import formatDate from '../utils/formatDate';

function Orders() {
  const [sales, setSales] = useState([]);
  const [date, setDate] = useState('');
  // const [seller, setSeller] = useState('');
  const [status, setStatus] = useState('Pendente');
  const [totalCart, setTotalCart] = useState('');
  const [products, setProducts] = useState([]);
  const itens = useSelector((state) => state.product.cart);
  const total = useSelector((state) => state.product.total);
  // const sellerOrder = useSelector((state) => state.product.seller);

  const { id } = useParams();

  useEffect(() => {
    setProducts(itens);
    setTotalCart(total);
    // setSeller(sellerOrder);
    async function fetchData() {
      try {
        const salesList = await getOrderByUser('/orders/', id);
        setSales(salesList);
        const { saleDate } = salesList;
        setDate(formatDate(saleDate));
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  /* console.log(sellerOrder);
  console.log(seller);
  console.log(sales);
  console.log(totalCart); */

  console.log(sales.saleDate);
  return (
    <div>
      <Header />
      <h1>Detalhe do Pedido</h1>

      <h2
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        { `PEDIDO ${sales.id};` }
      </h2>
      <div
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        Fulana Pereira

      </div>
      <div
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { date }

      </div>
      <div
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { status }

      </div>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
        disabled={ status === 'Pendente' }
        onClick={ () => { setStatus('Entregue'); localStorage.removeItem('carrinho'); } }
      >
        MARCAR COMO ENTREGUE

      </button>
      <table className="TableOrders">
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>

          { sales ? products.map((product, index) => (
            <tr key={ index }>
              <td
                data-testid={ `customer_order_details__element-order-table
              -item-number-${index}` }
              >
                { index + 1}

              </td>
              <td
                data-testid={ `customer_order_details__element-order-table
                -name-${index}` }
              >
                { product.name }

              </td>
              <td
                data-testid={ `customer_order_details__element-order-table
                -quantity-${index}` }
              >
                { product.quantity }

              </td>
              <td
                data-testid={ `customer_order_details__element-order-table-unit
                -price-${index}` }
              >
                { (product.price).replace('.', ',') }

              </td>
              <td
                data-testid={ `customer_order_details__element-order-table
                -sub-total-${index}` }
              >
                {(product.price * product.quantity).toFixed(2).replace('.', ',')}

              </td>
            </tr>
          )) : null }
        </tbody>
      </table>
      <div
        data-testid="customer_order_details__element-order-total-price"
      >
        { (+totalCart).toFixed(2).replace('.', ',') }

      </div>
    </div>
  );
}

export default Orders;
