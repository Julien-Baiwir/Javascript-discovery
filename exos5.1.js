// function askTvSerie() {
//   const seriesName = prompt("Please enter the name of your favorite show:");
//   const productionYear = parseInt(
//     prompt("Please enter the production year of the show:")
//   );

//   function enterCastNames() {
//     const castNames = []; // Initialize an empty array to store cast names
//     let userInput;
//     let counter = 1; // Counter to display cast member number

//     // Loop to repeatedly prompt for cast member names until "done" is entered
//     do {
//       userInput = prompt(
//         `Please enter the name of cast member ${counter} (or 'done' to finish):`
//       );
//       // If user input is not empty and not 'done', add it to castNames array
//       if (userInput && userInput.toLowerCase() !== "done") {
//         castNames.push(userInput);
//         counter++; // Increment counter for the next cast member number
//       }
//     } while (userInput && userInput.toLowerCase() !== "done");

//     return castNames; // Return the array containing cast member names
//   }

//   // Call enterCastNames function to collect cast member names
//   const castArray = enterCastNames();

//   // Return an object containing series name, production year, and cast members' names
//   return {
//     name: seriesName,
//     year: productionYear,
//     cast: castArray,
//   };
// }

// // Call askTvSerie function to gather TV series information
// const favoriteTvSerie = askTvSerie();

// // Display the TV series object in JSON format with proper indentation
// console.log("Favorite TV Series:", JSON.stringify(favoriteTvSerie, null, 2));

// JSON.stringify(): Converts the 'favoriteTvSerie' object to a JSON-formatted string.

// JSON.stringify(value, replacer, space)
// The JSON.stringify() method converts a JavaScript object or value into a JSON string.
// This method takes in three optional parameters: 'value', 'replacer', and 'space'.

// Parameters:
// 1. value: The JavaScript object or value to be converted into a JSON string.
// 2. replacer (optional): A function or an array specifying the properties to include in the resulting JSON string.
//    If null or not provided, all properties of the object are included in the resulting JSON string.
// 3. space (optional): Determines the indentation and whitespace used to format the resulting JSON string.
//    If a number is provided, it specifies the number of spaces for indentation.
//    If a string is provided, it uses that string for indentation.
//    If not provided or set to 0, no whitespace is added, resulting in a compact JSON string.

// Behavior:
// - Converts JavaScript objects into JSON strings.
// - Handles various data types such as objects, arrays, strings, numbers, boolean, null, and undefined.
// - Automatically serializes object properties into JSON key-value pairs.
// - Excludes non-serializable values like functions or undefined from the resulting JSON string.

// Example Usage:
// const obj = { name: 'Show', episodes: 10, ongoing: true };
// const jsonString = JSON.stringify(obj);
// console.log(jsonString);
// Output: {"name":"Show","episodes":10,"ongoing":true}

// Common Use Cases:
// - Sending data to a server for transmission.
// - Storing data in databases or files in a structured format.
// - Debugging and displaying structured data in a human-readable format.


// solution jeremy

function askTvSerie (){
  let tvSerie = {
    Title : prompt('Quel est votre série préféré?'),
    Year: parseFloat(prompt('Donne moi son année de production')),
    addActors : []
  }
  let actors = prompt ('Quels sont les acteurs');
  while ( actors != ''){
    tvSerie.addActors.push(actors);
    actors = prompt('Quels sont les acteurs');
  }

  return tvSerie;
}
console.log (askTvSerie());
