function halfTrangle() {
  for (let i = 1; i <= 5; i++) {
    let a = "   ";
    for (let j = i; i < 5; j++) {
      a = a + "*";
    }
    console.log(a);
  }
}
halfTrangle();
