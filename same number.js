function print() {
  for (let i = 1; i <= 5; i++) {
    let a = "";
    for (let j = 1; j <= 6 - i; j++) {
      a = a + i;
    }
    console.log(a);
  }
}
print();
/*output
11111
2222
333
44
5
*/
