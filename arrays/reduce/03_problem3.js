const asyncTask = function(i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100 * i);
  });
}

const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

promises.reduce((acc, val) => {
  return acc.then(() => {
    return val.then((val) => console.log(val));
  })
}, Promise.resolve());

