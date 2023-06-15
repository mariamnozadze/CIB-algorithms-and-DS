// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split("").reverse().join("");
  }
  
  module.exports = reverse;
  
  /**
   * The split('') method is used to convert the string into an array of individual characters.
  The reverse() method is called on the array to reverse the order of its elements.
  Finally, the join('') method is used to combine the reversed array elements back into a single string.
   */
  
  //solution 2
  function reverse(str) {
    const arr = str.split("");
    arr.reverse();
    return arr.join("");
  }
  
  //solution 3
  // function reverse(str) {
  // let reversed = "";
  
  // for (let character of str) {
  //   reversed = character + reversed;
  // }
  // return reversed;
  // }
  
  //solution 4 - WITH =FOR LOOP=
  function reverseString(str) {
    let reversed = "";
  
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  //solution 5 - WITH =WHILE LOOP=
  function reverseString(str) {
    let reversed = "";
    let i = str.length - 1;
  
    while (i >= 0) {
      reversed += str[i];
      i--;
    }
    return reversed;
  }
  
  //solution 6 - harder way for me
  function reverse(str) {
    return str.split("").reduce((reversed, character) => {
      return character + reversed;
    }, "");
  }
  