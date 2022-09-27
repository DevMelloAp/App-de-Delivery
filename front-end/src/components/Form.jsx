import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { cartTotal, getProductsToLocal }
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

  const tHead = () => (
    <TableHead>
      <TableRow>
        <StyledTableCell align="center" width="50px">Item</StyledTableCell>
        <StyledTableCell align="center" width="1000px">Descrição</StyledTableCell>
        <StyledTableCell width="200px">Quantidade</StyledTableCell>
        <StyledTableCell width="200px">Valor Unitário</StyledTableCell>
        <StyledTableCell width="200px">Sub-total</StyledTableCell>
        <StyledTableCell width="200px">Remover Item</StyledTableCell>
      </TableRow>
    </TableHead>
  );

  return (
    <Container>
      <TableContainer component={ Paper }>
        <Table className={ classes.table } size="small" aria-label="a dense table">
          <TableBody>
            { tHead() }
            { products ? products.map((product, index) => (
              <div key={ product.name }>
                {/*  <div> */}
                <TableCard
                  name={ product.name }
                  price={ product.price }
                  id={ product.id }
                  quantity={ product.quantity }
                  index={ index }
                  product={ product }
                />
              </div>
            )) : null }
          </TableBody>
        </Table>
      </TableContainer>

      <div data-testid="customer_checkout__element-order-total-price">
        { (cartTotal()).toFixed(2).replace('.', ',') }
      </div>

      <div> Detalhes e Endereço para Entrega</div>

      <form className={ classe.root } noValidate autoComplete="off">
        <div>
          <select
            label="Pessoa Vendedora Responsável"
            value="valor"
            /* onChange={ handleChange } */
            data-testid="customer_checkout__select-seller"
          >
            <option>
              valor
            </option>
            <option>
              valor 2
            </option>
          </select>
          <input
            label="Endereço"
            multiline
            maxRows={ 4 }
            value=""
            data-testid="customer_checkout__input-address"
          />
          <input
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
    </Container>
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
