import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
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
import { createSales } from '../utils/request';
import { getToLocalstorage } from '../utils/userLocalstorage';

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
  const [endereço, setEndereço] = useState('');
  const [numero, setNumero] = useState('');

  const navigate = useNavigate();

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

  const handleOrders = async () => {
    const user = getToLocalstorage('user');
    // const itens = cartTotal();
    console.log(user);

    const data = await createSales('/sales', {
      userId: user.id,
      sellerId: 2,
      totalPrice: cartTotal(),
      deliveryAddress: endereço,
      deliveryNumber: numero,
      status: 'pendente',
    });
    console.log(data);
    return <Navigate to={ `/customer/order/${data.id}` } />;
  };

  return (
    <Container>
      <TableContainer component={ Paper }>
        <Table className={ classes.table } size="small" aria-label="a dense table">
          <TableBody>
            { tHead() }
            { products ? products.map((product, index) => (
              <div key={ product.name }>
                <TableCard
                  name={ product.name }
                  price={ product.price }
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
            value={ endereço }
            onChange={ (e) => { setEndereço(e.target.value); } }
            data-testid="customer_checkout__input-address"
          />
          <input
            label="Número"
            multiline
            maxRows={ 4 }
            value={ numero }
            onChange={ (e) => { setNumero(e.target.value); } }
            data-testid="customer_checkout__input-address-number"
          />
        </div>
      </form>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={ () => {
          handleOrders();
          localStorage.removeItem('carrinho');
          navigate('/customer/order/:id');
        } }
        disableElevation
        data-testid="customer_checkout__button-submit-order"
      >
        FINALIZAR PEDIDO
      </Button>
    </Container>
  );
}

export default Form;
