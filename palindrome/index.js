// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(palindrome("racecar")); //true
console.log(palindrome("wazap")); //false

module.exports = palindrome;



//solution 2
// function palindrome(str) {
//   return str.split("").every((char, i) => {
//     return char === str[str.length - i - 1];
//   });
// }

/**=======EXPLANATION=====
 *The split("") method is used on the input string str to convert it into an array of individual characters. This allows us to iterate over each character easily.

The every method is called on the resulting array. The every method tests whether all elements in the array pass a given condition. It takes a callback function as an argument.

The callback function is defined with two parameters: char represents each character in the array, and i represents the current index.

Inside the callback function, it compares each character char with the corresponding character from the end of the string (str[str.length - i - 1]). It checks if they are equal.

The every method continues the iteration until the callback function returns false for any character comparison. If any character comparison fails, indicating a mismatch, the function immediately returns false, indicating that the string is not a palindrome.

If all character comparisons pass successfully, the every method returns true, indicating that all characters in the array satisfy the comparison condition. In this case, it means that the string is a palindrome.
 */



//solution 3 - by me :D
// function palindrome(str) {
//   const reversed = str.split("").reverse().join("");
//   if (str === reversed) {
//     return true;
//   } else {
//     return false;
//   }
// }



//solution 4 = FOR LOOP

// function palindrome(str) {
//   const length = str.length;
//   for (let i = 0; i < length / 2; i++) {
//     if (str[i] !== str[length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
