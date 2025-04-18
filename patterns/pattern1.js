function print(num) {
  let str;
  for (let row = 0;row < num; row++) {
    str = '';
    for (let col = 0; col < num; col++) {
      str += '*';
    }
    console.log(str);
  }
}

print(10);          /*  **********
                        **********
                        **********
                        **********
                        **********
                        **********
                        **********
                        **********
                        **********
                        **********
                    */