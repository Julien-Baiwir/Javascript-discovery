

// 2.1--------------------------

//  const userAge = (prompt("Please enter your age:"));

// if (userAge >= 18) {
//     alert("You are an adult");
// } else {
//     alert("You are not yet an adult");
// }

// let sign = prompt("What's your sign?");

// if (sign.toLowerCase() === "scorpio") {
//   alert("Wow! I'm a Scorpio too!");
// }


// 2.2 ------------------------------

// let minnumber = prompt("What's your min number?");
// let maxnumber = prompt("What's your max number?");
// let currentnumber = prompt("What's your current number?");

// if (minnumber > maxnumber) {
//     console.log("Error: The minimum number cannot be greater than the maximum number.");
// } else {
//     if (currentnumber >= minnumber && currentnumber <= maxnumber) {
//         console.log(`The current number ${currentnumber} is between ${minnumber} and ${maxnumber}.`);
//     } else {
//         console.log(`The current number ${currentnumber} is not between ${minnumber} and ${maxnumber}.`);
//     }
// }



// while
// let i = 1;

//  while (i <= 100) {
//   console.log(i);
//   i += 1;
// }

// let i = 1



// 2.4 -----------

// for (let i = 1; i <= 100; i++) 
//     if (i % 2 === 0) {
//         console.log(`${i} divided by 2 is ${i / 2}`);
//     } else {
//         console.log(`${i} multiplied by 3 is ${i * 3}`);
//     }
// ----------------

// for (let i = 1; i <= 100; i += 1) {
//     if (i % 2 === 0) {
//                 console.log(`${i} divided by 2 is ${i / 2}`);
//             } else {
//                console.log(`${i} multiplied by 3 is ${i * 3}`);
//            }
// }



// for(i=1; i<=100; i++){
//     if (i%2==0){
//     console.log(i/2);
//     }
//     else{
//     console.log(i*3);
//     }
//     }

// 2.5 ---------------

  
// let number = prompt('Quel est votre numéro préféré ?');
// while ( number != 42){
// alert('Etes-vous sur ?');
// number = prompt('Quel est votre numéro préféré ?');
// }
// if (number == 42){
//     console.log('yes');
// }


// 2.6 ---------------

// let minumber = parseInt(prompt("Choose a number beetween 1 and 7"));

// if ( minumber >0 && minumber < 3){
//     if (minumber == 1){
//         console.log('Lundi');
//     } else if (minumber == 2){
//         console.log('Mardi');
//     } else{
//         console.log('Please enter an other number');
//     }
// }

// 2.7 ---------------
// let number = (prompt("Choose a number n:"));
// let sum = 0;

// for ( let i=0; i < number; i++){
//    let num = parseInt(prompt (`Enter new number ${i + 1}`));
//    sum += num;
  
// }
// console.log(`The sum of the numbers is: ${sum}`);
