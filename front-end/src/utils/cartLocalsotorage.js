function sendProductsToLocal(product, name) {
  const cartLocal = JSON.parse(localStorage.getItem(`carrinho${name}`));

  if (cartLocal) {
    const newCartLocal = cartLocal
      .filter((productLocal) => productLocal.id !== product.id);
    newCartLocal.push(product);
    localStorage.setItem(`carrinho${name}`, JSON.stringify(newCartLocal));
  } else {
    localStorage.setItem(`carrinho${name}`, JSON.stringify([cartLocal]));
  }
}

function getProductsToLocal(name) {
  const cartLocal = JSON.parse(localStorage.getItem(`carrinho${name}`));

  if (cartLocal) {
    return cartLocal;
  }
}

function removeProductsToLocal(product, name) {
  const cartLocal = JSON.parse(localStorage.getItem(`carrinho${name}`));
  const newCartLocal = cartLocal
    .filter((productLocal) => productLocal.id !== product.id);

  localStorage.setItem(`carrinho${name}`, JSON.stringify(newCartLocal));
}

function removeCartToLocal(name) {
  localStorage.removeItem(`carrinho${name}`);
}

function cartTotal(name) {
  const cartLocal = JSON.parse(localStorage.getItem(`carrinho${name}`));

  if (cartLocal) {
    const total = cartLocal
      .reduce((acc, curr) => {
        acc += curr.price * curr.quatity;
        return acc;
      }, 0);

    return total;
  }
  return 0.00;
}

module.exports = { sendProductsToLocal,
  getProductsToLocal,
  removeCartToLocal,
  removeProductsToLocal,
  cartTotal };
