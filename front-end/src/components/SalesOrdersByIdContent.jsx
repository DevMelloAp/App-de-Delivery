import React, { useEffect, useState } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';

import { useParams } from 'react-router-dom';
import styles from '../styles/sallerOrders.module.css';
import { requestData } from '../utils/request';
import SalesOrdersByIdContentTable from './SalesOrdersByIdContentTable';
import formatDate from '../utils/formatDate';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    fontSize: 10,
    textAlign: 'centeryy',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const dataTestId = {
  id: 'seller_order_details__element-order-details-label-order-id',
  date: 'seller_order_details__element-order-details-label-order-date',
  status: 'seller_order_details__element-order-details-label-delivery-status',
  preparing: 'seller_order_details__button-preparing-check',
  dispatch: 'seller_order_details__button-dispatch-check',
  totalPrice: 'seller_order_details__element-order-total-price',
};

export default function SalesOrdersByIdContent() {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);
  const [infos, setInfos] = useState([]);
  const [price, setPrice] = useState('');

  const params = useParams();

  const getData = async () => {
    const data = await requestData(`/sellers/orders/details/${params.id}`);
    console.log(data);
    const { id, products, saleDate, status, totalPrice } = data;
    setOrders(products);
    setInfos([{ id, saleDate, status }]);
    setPrice(totalPrice);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={ styles.container }>
      <div className={ styles.flex__container }>
        {infos && infos.map((info) => (
          <div className={ styles.flex__container__content } key={ info.id }>
            <h2 data-testid={ dataTestId.id }>
              Pedido
              {' '}
              {info.id}
            </h2>
            <h2
              data-testid={ dataTestId.date }
            >
              {formatDate(info.saleDate)}
            </h2>
            <h2
              // eslint-disable-next-line max-len
              data-testid={ dataTestId.status }
            >
              {info.status}
            </h2>
          </div>
        ))}

        <div className={ styles.flex__container__content }>
          <button
            type="button"
            data-testid={ dataTestId.preparing }
          >
            Preparar Pedido
          </button>
          <button
            type="button"
            data-testid={ dataTestId.dispatch }
            disabled
          >
            Saiu Para Entrega
          </button>
        </div>
      </div>
      <Table className={ classes.table } size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Item</StyledTableCell>
            <StyledTableCell>Descrição</StyledTableCell>
            <StyledTableCell>Quantidade</StyledTableCell>
            <StyledTableCell>Valor Unitário</StyledTableCell>
            <StyledTableCell>Sub-total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders && orders.map((order, index) => (
            <SalesOrdersByIdContentTable
              key={ order.name }
              id={ order.id }
              index={ index }
              price={ order.price }
              name={ order.name }
              quantity={ order.SalesProduct.quantity }
            />
          ))}
        </TableBody>
      </Table>
      <div className={ styles.container__total }>
        <span data-testid={ dataTestId.totalPrice }>
          {Number(price).toFixed(2).replace('.', ',')}
        </span>
      </div>
    </div>
  );
}
