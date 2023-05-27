function starPrint() {
  for (i = 1; i <= 5; i++) {
    let a = " ";
    for (j = 1; j < 6; j++) {
      a = a + "*";
    }
    console.log(a);
  }
}
starPrint();
/*output
 *****
 *****
 *****
 *****
 *****
 */
