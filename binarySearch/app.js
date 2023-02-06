// class Node {
//   constructor(d) {
//     this.data = d;
//     this.left = null;
//     this.right = null;
//   }
// }

// let root = null;

// function sortedArrayToBST(arr, start, end) {
//   if (start > end) return null;

//   let mid = parseInt((start + end) / 2);
//   let node = new Node(arr[mid]);

//   node.left = sortedArrayToBST(arr, start, mid - 1);
//   node.right = sortedArrayToBST(arr, mid + 1, end);
// }

// function preOrder(node) {
//   if (node === null) return;
//   document.write(node.data + " ");
//   preOrder(node.left);
//   preOrder(node.right);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];
// let n = arr.length;
// root = sortedArrayToBST(arr, 0, n - 1);
// document.write("Preorder traversal of constructed BST<br>");
// preOrder(root);
