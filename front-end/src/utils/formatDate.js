const formatDate = (date) => {
  const index = date.indexOf('T');
  const result = date.slice(0, index);
  const data = new Date(result);
  const d = data.getDate();
  const m = data.getMonth();
  const y = data.getFullYear();
  return `${d}/${m}/${y}`;
};

// const data = '2022-09-28T22:08:44.000Z';
// const i = data.indexOf('T');
// const result = data.slice(0, i);
// const newDate = new Date(result);
// console.log(newDate);
// console.log(result);

export default formatDate;
