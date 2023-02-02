const LinkedList = require("./LinkedList");

const ll = new LinkedList();
ll.insertAtHead(10);
ll.insertAtHead(20);

console.log(ll);
// class LinkedList{
//     constructor(value){
//         this.value =

//     }

// }

// class Node{

// }

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

// function fibsRec(n) {
//   if (n < 2) return 1;

//   return fibsRec(n - 1) + fibsRec(n - 2);
// }
// console.log(fibsRec(5));

// function mult(n) {
//   let sum = 0;
//   if (mult(n - 1) % 3 === 0 || mult(n - 1) % 5 === 0) {
//     sum = sum + mult(n - 1);
//   }
//   return sum;
// }

// console.log(mult(10));

// function mergeSortTopDown(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   const middle = Math.floor(arr.length / 2);
//   const left = arr.slice(0, middle);
//   const right = arr.slice(middle);

//   return mergeSortTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
// }

// function mergeTopDown(left, right) {
//   const arr = [];

//   while (left.length && right.length) {
//     if (left[0] < right[0]) {
//       arr.push(left.shift());
//     } else {
//       arr.push(right.shift());
//     }
//   }
//   return arr.concat(left.slice()).concat(right.slice());
// }

// testArr = [1, 8, 2, 0, 9, 10, 188, 23, 3289];

// console.log(mergeSortTopDown(testArr));
