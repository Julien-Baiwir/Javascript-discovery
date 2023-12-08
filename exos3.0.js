// 3.0 --------------
// let arr = ["Joshua", "Pierre", "Thomas", "Huseyine", "Mathias", "Giuseppe"];
// let firstIteration = true;

// for (let i = 0; i < arr.length; i++) {
//     if (firstIteration) {
//         console.log("La classe wilson3:");
//         firstIteration = false; 
//     }
//     console.log(arr[i]);
// }

// 3.1 --------------

// let arr = [1,2,3];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);

// 3.2 --------------
// let arr = [1,2,3,4];
// let sum = 0;
//  for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// let averagevalue = (sum /arr.length );
// console.log (averagevalue);

// 3.3 --------------
// let arr1 = [1,2,3,4,5];
// let arr2 = [];
// for (let i = 0; i < arr1.length; i++) {
//     arr2[i] = arr1[i];
// }
// version 2----------
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [];

// for (let i = 0; i < arr1.length; i++) {
//     arr2.push(arr1[i]);
// }

// 3.4 --------------

// let array = [3, 7, 1, 9, 4, 5, 10, 8];

// if (array.length === 0) {
//   console.log("Array is empty");
// } else {
//   let min = array[0];
//   let max = array[0];

//   for (let i = 1; i < array.length; i++) {
//     if (array[i] < min) {
//       min = array[i];
//     }
//     if (array[i] > max) {
//       max = array[i];
//     }
//   }

//   console.log(`The minimum element is: ${min}`);
//   console.log(`The maximum element is: ${max}`);
// }

// explication:
// let min = array[0]; let max = array[0];: Ici, deux variables min et max sont initialisées avec la première valeur du tableau. Cela prépare les variables pour comparer les autres éléments du tableau.