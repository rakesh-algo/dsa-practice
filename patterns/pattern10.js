function print(num) {
  for (let row = 1; row <= num; row++) {
    const result = [];
    for (let col = 1; col <= row; col++) {
      result.push(Number(!result[result.length - 1]));
    }
    console.log(result.join(''));
  }
}

print(10);