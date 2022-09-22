function sendToLocalstorage(info) {
  localStorage.setItem('userInfor', JSON.parse(info));
}

function getToLocalstorage() {
  const info = JSON.stringify(localStorage.getItem('userInfor'));

  return info;
}

function removeToLocalstorage() {
  localStorage.removeItem('userInfor');
}

module.exports = { sendToLocalstorage, getToLocalstorage, removeToLocalstorage };
