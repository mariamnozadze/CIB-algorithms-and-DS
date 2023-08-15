// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//sol: 1
// function cleanString(str) {
//   return str.replace(/[^\w]/g, "").toLowerCase();
// }

// function anagrams(stringA, stringB) {
//   const cleanedStr1 = cleanString(stringA);
//   const cleanedStr2 = cleanString(stringB);

//   return (
//     //to ensure that the characters are in the same order
//     cleanedStr1.split("").sort().join("") ===
//     cleanedStr2.split("").sort().join("")
//   );
// }

// module.exports = anagrams;


//sol: 2
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

module.exports = anagrams;
