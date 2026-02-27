const a = 7, b = 7, c = 7;

if (a === b && b === c)
  console.log('Equilateral');
else if (a === b || b === c || a === c)
  console.log('Isosceles');
else
  console.log('Scalene');