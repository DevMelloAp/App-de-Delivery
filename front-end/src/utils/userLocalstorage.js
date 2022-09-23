function sendToLocalstorage(info) {
  localStorage.setItem('userInfor', JSON.stringify(info));
}

function getToLocalstorage() {
  const info = JSON.parse(localStorage.getItem('userInfor'));

  return info;
}

function removeToLocalstorage() {
  localStorage.removeItem('userInfor');
}

module.exports = { sendToLocalstorage, getToLocalstorage, removeToLocalstorage };
