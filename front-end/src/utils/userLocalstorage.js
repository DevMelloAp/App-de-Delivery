function sendToLocalstorage(info) {
  localStorage.setItem('user', JSON.stringify(info));
}

function getToLocalstorage() {
  const info = JSON.parse(localStorage.getItem('user'));

  return info;
}

function getItensToLocalstorage() {
  const info = JSON.parse(localStorage.getItem('carrinho'));

  return info;
}

function removeToLocalstorage() {
  localStorage.removeItem('user');
}

function removeItensToLocalstorage() {
  localStorage.removeItem('carrinho');
}

module.exports = { sendToLocalstorage,
  getToLocalstorage,
  removeToLocalstorage,
  removeItensToLocalstorage,
  getItensToLocalstorage,
};
