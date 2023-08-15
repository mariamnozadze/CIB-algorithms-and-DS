// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]



//sol: 1
// function chunk(array, size) {
//   //Initialize an empty array called chunked to store the subarrays.
//   const chunked = [];

//   // to keep track of the current position while iterating through the array.
//   let index = 0;

//   //loop continues as long as the index is less than the length of the input array.
//   while (index < array.length) {
//     //It takes a portion of the original array. The portion starts at the index position and includes elements up to the position index + size - 1. In simpler words, it's like cutting out a piece from the array.
//     chunked.push(array.slice(index, index + size));

//     //Increment the index by the size to move to the next portion of the array.
//     //update the index variable.
//     index += size;
//   }

//   return chunked;
// }

// module.exports = chunk;

//EXPLANATION OF SOLUTION 1:
/**
 * Let's take an example to see how this works with the input [1, 2, 3, 4, 5] and a chunk size of 2:

Iteration 1:

index = 0
Extract subarray from index 0 to 0+2 = [1, 2]
Push [1, 2] into chunked
Iteration 2:

index = 2
Extract subarray from index 2 to 2+2 = [3, 4]
Push [3, 4] into chunked
Iteration 3:

index = 4
Extract subarray from index 4 to 4+2 = [5]
Push [5] into chunked
Loop finishes

Resulting chunked array: [[1, 2], [3, 4], [5]]
*/




//sol: 2
// function chunk(array, size) {
//     const chunked = [];

//     for (let i = 0; i < array.length; i += size) {
//       chunked.push(array.slice(i, i + size));
//     }

//     return chunked;
//   }


//sol: 3 (from Stephen) -- where we define last num
function chunk (array, size) {
    const chunked = [];

    for(let element of array){
        const last = chunked[chunked.length-1];

        if(!last || last.length === size){
            chunked.push([element])
        }else{
            last.push(element)
        }
    }

    return chunked;
}

module.exports = chunk;