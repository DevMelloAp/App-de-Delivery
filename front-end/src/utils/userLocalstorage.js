function sendToLocalstorage(info) {
  localStorage.setItem('user', JSON.stringify(info));
}

function getToLocalstorage() {
  const info = JSON.parse(localStorage.getItem('user'));

  return info;
}

function removeToLocalstorage() {
  localStorage.removeItem('user');
}

module.exports = { sendToLocalstorage, getToLocalstorage, removeToLocalstorage };
