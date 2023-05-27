/*step-1 we will create a outer loop
step-1.1 store this loop value in varriable
step-2 create a second loop for print hash
step-2.2 will put this second loop value less than first loop value
step-3  prin hash*/

function printHash() {
  for (let i = 5; i >= 1; i--) {
    let a = "";
    for (let j = 0; j < i; j++) {
      a = a + "#";
    }
    console.log(a);
  }
}
printHash();
/*
output
#####
####
###
##
#*/
