import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartTotal } from '../utils/cartLocalsotorage';
import { createSales, requestData } from '../utils/request';
import { getToLocalstorage } from '../utils/userLocalstorage';
import TableCard from './Table';
import { addSeller } from '../redux/actions/products';

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
  const dispatch = useDispatch();
  const [seller, setSeller] = useState('');
  const [sellers, setSellers] = useState([]);
  const [products, setProducts] = useState('');
  const [endereço, setEndereço] = useState('');
  const [numero, setNumero] = useState('');
  const [totalCart, setTotalCart] = useState('');
  const itens = useSelector((state) => state.product.cart);
  const total = useSelector((state) => state.product.total);

  const navigate = useNavigate();

  const getSellers = async () => {
    const sellersList = await requestData('/sellers');
    setSellers(sellersList);
  };

  useEffect(() => {
    setProducts(itens);
    setTotalCart(total);
    getSellers();
  }, []);

  useEffect(() => {
    setProducts(itens);
    setTotalCart(total);
    // setProducts(getProductsToLocal());
  }, [itens]);

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

  console.log('sellers ===>', sellers);
  console.log('seller ===>', seller);

  const [idSeller] = sellers.filter((s) => s.name === seller).map((it) => it.id);

  console.log('idSeller ===> ', idSeller);

  const handleOrders = async () => {
    const user = getToLocalstorage('user');
    // const itens = getProductsToLocal();
    const idAndQuantity = itens
      .map((item) => ({ productId: item.id, quantity: item.quantity }));

    const data = await createSales('/sales', {
      userId: user.id,
      sellerId: 2,
      totalPrice: cartTotal(),
      deliveryAddress: endereço,
      deliveryNumber: numero,
      status: 'Pendente',
      productsList: idAndQuantity,
    }, user.token);

    console.log('data ----> ', data);

    return navigate(`/customer/orders/${data.id}`);
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
        { (+totalCart).toFixed(2).replace('.', ',') }
        {/* { (cartTotal()).toFixed(2).replace('.', ',') } */}
      </div>

      <div> Detalhes e Endereço para Entrega</div>

      <form className={ classe.root } noValidate autoComplete="off">
        <div>
          <select
            label="Pessoa Vendedora Responsável"
            value={ seller }
            onChange={ (e) => { setSeller(e.target.value); } }
            data-testid="customer_checkout__select-seller"
          >
            <option>Selecione um Vendedor</option>
            { sellers.map((s, index) => (
              <option key={ index }>
                { s.name }
              </option>
            ))}
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
          dispatch(addSeller(seller));
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
