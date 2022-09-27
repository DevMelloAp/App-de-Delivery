import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: 'left',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function TableCard(props) {
  const { name, price, quantity, id, index } = props;

  return (
    <StyledTableRow key={ index }>
      <StyledTableCell
        data-testid={
          `customer_checkout__element-order-table-item-number-${index}`
        }
      >
        { id }

      </StyledTableCell>
      <StyledTableCell
        data-testid={ `customer_checkout__element-order-table-item-name-${index}` }
      >
        { name }

      </StyledTableCell>
      <StyledTableCell
        data-testid={
          `customer_checkout__element-order-table-item-quantity-${index}`
        }
      >
        { quantity }

      </StyledTableCell>
      <StyledTableCell
        data-testid={
          `customer_checkout__element-order-table-item-unit-price-${index}`
        }
      >
        { price }

      </StyledTableCell>
      <StyledTableCell
        data-testid={
          `customer_checkout__element-order-table-item-sub-total-${index}`
        }
      >
        {(quantity * price).toFixed(2)}

      </StyledTableCell>
    </StyledTableRow>
  );
}

TableCard.propTypes = {
  name: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
  quantity: PropTypes.node.isRequired,
  id: PropTypes.node.isRequired,
  index: PropTypes.node.isRequired,
};

export default TableCard;
