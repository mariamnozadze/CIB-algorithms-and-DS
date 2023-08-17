// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'



//sol: 1 --- SHORTEST
// function capitalize(str) {
//     return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
// }

// module.exports = capitalize;



//sol: 2
// function capitalize(str) {
//     const words = str.split(' ');

//     for (let i = 0; i < words.length; i++) {
//       words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//     }

//     return words.join(' ');
// }

// module.exports = capitalize;




// //sol: 3 by Stephen
// function capitalize(str) {
//   // Create an empty array to store the capitalized words.
//   const words = [];

//   // Split the input string into an array of words based on spaces.
//   for (let word of str.split(" ")) {

//     // Capitalize the first letter of the current word by making it uppercase,
//     // and then combine it with the rest of the word (excluding the first letter).
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   // Join the modified words back together to form a new capitalized sentence.
//   return words.join(" ");
// }

// module.exports = capitalize;



//sol: 4 by Stephen --- NOT SO GOOD
function capitalize(str) {
  // Create a variable 'result' and initialize it with the first character of the string capitalized.
  let result = str[0].toUpperCase();

  // Iterate through each character of the string starting from the second character.
  for (let i = 1; i < str.length; i++) {
    // Check if the previous character is a space.
    if (str[i - 1] === " ") {
      // If the previous character is a space, capitalize the current character
      // and add it to the 'result' string.
      result += str[i].toUpperCase();
    } else {
      // If the previous character is not a space, add the current character as-is to the 'result'.
      result += str[i];
    }
  }

  // Return the 'result' string with the first letter of each word capitalized.
  return result;
}

module.exports = capitalize;
