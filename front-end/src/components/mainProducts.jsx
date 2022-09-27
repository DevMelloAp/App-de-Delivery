import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addNewPruduct, getCartTotal } from '../redux/actions/actions';
import styles from '../styles/productCard.module.css';
import { requestData } from '../utils/request';
import Checkout from './checkout';
import ProductCard from './ProductCard';

export default function MainProducts() {
  const [products, setProducts] = useState();
  // const cart = useSelector((state) => state.cartProducts);
  // const dispatch = useDispatch();

  const getProducts = async () => {
    setProducts(await requestData('/products'));
    // dispatch(addNewPruduct({ id: 1, name: 'Imar', idade: 35, price: 10.0 }));
    // dispatch(addNewPruduct({ id: 2, name: 'Victor', idade: 25, price: 100.0 }));
    // dispatch(getCartTotal());
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className={ styles.mainProduct }>
      { products ? products.map((product) => (
        <div key={ product.name }>
          <ProductCard
            name={ product.name }
            price={ product.price }
            urlImage={ product.url_image }
            id={ product.id }
          />
        </div>
      )) : null }
      <Checkout />
    </div>
  );
}
