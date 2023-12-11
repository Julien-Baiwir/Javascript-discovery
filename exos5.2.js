// // Function to ask for TV series information
// function askTvSerie() {
//   const seriesName = prompt("Please enter the name of your favorite show:");
//   const productionYear = parseInt(
//     prompt("Please enter the production year of the show:")
//   );

//   function enterCastNames() {
//     const castNames = [];
//     let userInput;
//     let counter = 1;

//     do {
//       userInput = prompt(
//         `Please enter the name of cast member ${counter} (or 'done' to finish):`
//       );

//       if (userInput && userInput.toLowerCase() !== "done") {
//         castNames.push(userInput);
//         counter++;
//       }
//     } while (userInput && userInput.toLowerCase() !== "done");

//     return castNames;
//   }

//   const castArray = enterCastNames();

//   // Return both TV series data and cast members
//   return {
//     name: seriesName,
//     year: productionYear,
//     cast: castArray,
//   };
// }

// // Function to randomize the cast members of a TV series
// function randomizeCast(tvSerie) {
//   const originalCast = askTvSerie.enterCastNamesgg;
//   const randomizedCast = [...originalCast].sort(() => Math.random() - 0.5);
//   return randomizedCast;
// }

// // Get TV series information
// const favoriteTvSerie = askTvSerie();

// // Display the original cast
// console.log("Original Cast:", favoriteTvSerie.cast);

// // Randomize the cast members
// const newRandomizedCast = randomizeCast(favoriteTvSerie);

// // Display the randomized cast for the new series
// console.log("Randomized Cast for Next Series:", newRandomizedCast);


//
// function askTvSerie (){
//     let tvSerie = {
//       Title : prompt('Quel est votre série préféré?'),
//       Year: parseFloat(prompt('Donne moi son année de production')),
//       addActors : []
//     }
//     let actors = prompt ('Quels sont les acteurs');
//     while ( actors != ''){
//       tvSerie.addActors.push(actors);
//       actors = prompt('Quels sont les acteurs');
//     }
  
//     return tvSerie;
//   }

//  console.log (askTvSerie ());


// function randomizeCast (tvSerie){
//     let acteurHasard = [];
//     for (let i = 0; i < tvSerie.addActors.length; i++){
    
//     let hasard = Math.floor(Math.random()*tvSerie.addActors.length);
//     hasard.push(tvSerie.addActors);
//     }
//     tvSerie.addActors = acteurHasard;

//     return tvSerie;
//     }

// console.log(randomizeCast ());