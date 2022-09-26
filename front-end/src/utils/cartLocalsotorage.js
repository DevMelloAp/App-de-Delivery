function sendProductsToLocal(product) {
  const cartLocal = JSON.parse(localStorage.getItem('carrinho'));

  if (cartLocal === null || cartLocal.length === 0) {
    localStorage.setItem('carrinho', JSON.stringify([product]));
  } else {
    const newCartLocal = cartLocal
      .filter((productLocal) => productLocal.id !== product.id);
    newCartLocal.push(product);
    localStorage.setItem('carrinho', JSON.stringify(newCartLocal));
  }
}

function getProductsToLocal() {
  const cartLocal = JSON.parse(localStorage.getItem('carrinho'));

  if (cartLocal) {
    return cartLocal;
  }
}

function removeProductsToLocal(product) {
  const cartLocal = JSON.parse(localStorage.getItem('carrinho'));
  const newCartLocal = cartLocal
    .filter((productLocal) => productLocal.id !== product.id);

  localStorage.setItem('carrinho', JSON.stringify(newCartLocal));
}

function removeCartToLocal() {
  localStorage.removeItem('carrinho');
}

function cartTotal() {
  const cartLocal = JSON.parse(localStorage.getItem('carrinho'));

  console.log(cartLocal);
  if (cartLocal) {
    const total = cartLocal
      .reduce((acc, curr) => {
        acc += curr.price * curr.quantity;
        return acc;
      }, 0);
    console.log(total);
    return total;
  }
  return 0.00;
}

module.exports = { sendProductsToLocal,
  getProductsToLocal,
  removeCartToLocal,
  removeProductsToLocal,
  cartTotal };
