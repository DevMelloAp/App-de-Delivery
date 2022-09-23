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
      { products ? ( products.forEach((product) => (
        <p>{product.name}</p>
      )): null )}
    </div>
  );
}
