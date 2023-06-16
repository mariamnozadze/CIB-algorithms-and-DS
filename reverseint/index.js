// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(num) {
  const reversed = parseInt(num.toString().split("").reverse().join(""));
  return reversed * Math.sign(num);
}

module.exports = reverseInt;

//solution 2
// function reverseInt(n) {
//   const reversed = n.toString().split("").reverse().join("");
//   if (n < 0) {
//     return parseInt(reversed) * -1; //or use Math.sign(n) instead of "-1"
//   }
//   return parseInt(reversed);
// }
