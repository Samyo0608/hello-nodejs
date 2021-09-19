console.log("hello world!");

function sum(param) {
  //TODO: 請從1+2+3+...+param
  //param: 6 =>1+2+3+4+5+6;
  let n = 0;
  for (i = 0; i < param; i++) {
    n = n + i;
  }
  console.log(n);
}

console.log(sum(6));
