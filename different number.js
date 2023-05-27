/*function printNumber() {
  for (let i = 1; i <= 5; i++) {
    let a = "";
    for (let j = i; j <= -i; j++) {
      a = a + j;
    }
    console.log(a);
  }
}
printNumber();*/
/*function print() {
  for (let i = 1; i <= 5; i++) {
    let a = "";
    for (let j = i; j <= 5; j++) {
      a = a + j;
    }
    console.log(a);
  }
}
print();*/

function printNumberSeries(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    let x = "";
    //here i will be start from 2
    for (let j = i; j <= n; j++) {
      x += j;
    }
    // \n means new line
    result = result + x + "\n";
  }

  return result;
}

console.log(printNumberSeries(5));

/*output
12345
2345
345
45
5*/
