import React, { useEffect, useState } from 'react';
import { requestData } from '../utils/request';
import ProductCard from './ProductCard';
import styles from '../styles/productCard.module.css';
import Checkout from './checkout';

export default function MainProducts() {
  const [products, setProducts] = useState();

  const getProducts = async () => {
    setProducts(await requestData('/products'));
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
