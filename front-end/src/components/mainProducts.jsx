import React, { useEffect, useState } from 'react';
import { requestData } from '../utils/request';
import ProductCard from './ProductCard';

export default function MainProducts() {
  const [products, setProducts] = useState();

  const getProducts = async () => {
    setProducts(await requestData('/products'));
  };

  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div>
      { products ? products.map((product, index) => (
        <div key={ product.name }>
          <ProductCard
            name={ product.name }
            price={ product.price }
            urlImage={ product.url_image }
            index={ index }
          />
        </div>
      )) : null }
    </div>
  );
}
