const upperCase = (str) => {
  return str.toUpperCase();
}

const reverse = str => {
  return str.split('').reverse().join('');
}

const append = str => {
  return 'Hello ' + str;
}

const arr = [upperCase, reverse, append];

const initialValue = 'learnersbucket';

const result = arr.reduce((acc, val) => {
  const value = val(acc);
  return value;
}, initialValue);

console.log(result);
