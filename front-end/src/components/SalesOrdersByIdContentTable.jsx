import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import { TableRow } from '@material-ui/core';

export default function SalesOrdersByIdContentTable({ id,
  index, price, name, quantity }) {
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

  // const dataTestId = {
  //   id: `seller_order_details__element-order-table-item-number-${index}`,
  //   description: `seller_order_details__element-order-table-name-${index}`,
  //   quantity: `seller_order_details__element-order-table-quantity-${index}`,
  //   price: `seller_order_details__element-order-table-unit-price-${index}`,
  //   subTotal: `seller_order_details__element-order-table-sub-total-${index}`,
  // };

  return (
    <TableRow>
      <StyledTableCell
        data-testid={ `seller_order_details__element-order-table-item-number-${index}` }
      >
        {id}
      </StyledTableCell>
      <StyledTableCell
        data-testid={ `seller_order_details__element-order-table-name-${index}` }
      >
        {name}
      </StyledTableCell>
      <StyledTableCell
        data-testid={ `seller_order_details__element-order-table-quantity-${index}` }
      >
        {quantity}
      </StyledTableCell>
      <StyledTableCell
        data-testid={ `seller_order_details__element-order-table-unit-price-${index}` }
      >
        R$
        {' '}
        {price}
      </StyledTableCell>
      <StyledTableCell
        data-testid={ `seller_order_details__element-order-table-sub-total-${index}` }
      >
        R$
        {' '}
        {(+price * +quantity).toFixed(2)}
      </StyledTableCell>
    </TableRow>
  );
}

SalesOrdersByIdContentTable.propTypes = {
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
