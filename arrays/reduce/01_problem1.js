const arr = [1.1, 1.2, 1.3, 2, 3.4, 3.5, 4, 5.6];

const result = arr.reduce((acc, val) => {
  const floored = Math.floor(val);

  if (!acc[floored])
    acc[floored] = [];

  acc[floored].push(val);

  return acc;
}, {});

console.log(result);

