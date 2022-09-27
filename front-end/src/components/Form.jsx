import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import { cartTotal, getProductsToLocal, removeProductsToLocal }
  from '../utils/cartLocalsotorage';
import TableCard from './Table';

const useStyless = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function Form() {
  const classe = useStyless();
  const classes = useStyles();

  const [products, setProducts] = useState('');

  useEffect(() => {
    setProducts(getProductsToLocal());
  }, []);

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

  return (
    <>
      <TableContainer component={ Paper }>
        <Table className={ classes.table } size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Item</StyledTableCell>
              <StyledTableCell>Descrição</StyledTableCell>
              <StyledTableCell>Quantidade</StyledTableCell>
              <StyledTableCell>Valor Unitário</StyledTableCell>
              <StyledTableCell>Sub-total</StyledTableCell>
              <StyledTableCell>Remover Item</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            { products ? products.map((product, index) => (
              <div key={ product.name }>
                <div>
                  <TableCard
                    name={ product.name }
                    price={ product.price }
                    id={ product.id }
                    quantity={ product.quantity }
                    index={ index }
                  />
                </div>

                <Button
                  type="submit"
                  variant="contained"
                  width="10px"
                  color="primary"
                  disableElevation
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                  onClick={ (e) => {
                    (e.target.parentNode.parentNode).remove();
                    removeProductsToLocal(product);
                  } }

                >
                  Remover
                </Button>
              </div>
            )) : null }
          </TableBody>
        </Table>
      </TableContainer>

      <div data-testid="customer_checkout__element-order-total-price">
        Total:
        {' '}
        { cartTotal() }
      </div>

      <div> Detalhes e Endereço para Entrega</div>

      <form className={ classe.root } noValidate autoComplete="off">
        <div>
          <TextField
            select
            label="Pessoa Vendedora Responsável"
            value="valor"
            /* onChange={ handleChange } */
            helperText="Please select your currency"
            data-testid="customer_checkout__select-seller"
          >
            <MenuItem>
              valor
            </MenuItem>
            <MenuItem>
              valor 2
            </MenuItem>
          </TextField>
          <TextField
            label="Endereço"
            multiline
            maxRows={ 4 }
            value=""
            data-testid="customer_checkout__input-address"
          />
          <TextField
            /* id="standard-multiline-flexible" */
            label="Número"
            multiline
            maxRows={ 4 }
            value=""
            data-testid="customer_checkout__input-address-number"
          />
        </div>
      </form>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disableElevation
        data-testid="customer_checkout__button-submit-order"
      >
        FINALIZAR PEDIDO
      </Button>
    </>
  );
}

export default Form;

/* import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
            <StyledTableCell align="right">Calories</StyledTableCell>
            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
 */
