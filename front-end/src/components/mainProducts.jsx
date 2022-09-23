import React, { useEffect, useState } from 'react';
import { requestData } from '../utils/request';

export default function MainProducts() {
  const [products, setProducts] = useState();

  useEffect(async () => {
    setProducts(await requestData('/products'));
  }, []);
  console.log(products);
  return (
    <div>
      { products ? products.map((product) => (
        <div key={ product.name }>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <img src={ product.url_image } alt={ product.name } />
        </div>
      )) : null }
    </div>
  );
}
