// function fibs(n) {
//   let x = 1;
//   let t = 0;
//   let p = 0;
//   for (let i = 1; i <= n; i++) {
//     p = x + t;
//     x = t;
//     t = p;
//   }
//   return p;
// }
// console.log(fibs(4));

function fibsRec(n) {
  if (n < 2) return 1;

  return fibsRec(n - 1) + fibsRec(n - 2);
}
console.log(fibsRec(5));
