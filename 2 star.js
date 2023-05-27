/*step -1 create for loop 
step -1.1 run this loop =5
step-2 -  create another loop for star dicriment
step-3 print star*/
function print() {
  for (i = 1; i <= 5; i++) {
    let a = "";
    for (j = 1; j < 6 - i; j++) {
      a = a + "*";
    }
    console.log(a);
  }
}
print();
/*output
 *****
 ****
 ***
 **
 */
