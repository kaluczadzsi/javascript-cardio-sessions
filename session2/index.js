'use strict';
// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// If more than one longest word, put into an array
// ex. longestWord('Hello, my name is Brad') === 'hello'
// ex. longestWord('Hello there, my name is Brad') === ['hello', 'there']

function longestWord(sen) {
  // create filtered array
  let words = sen.replace(',', '').split(' ');

  // sort by length
  const sorted = words.sort((a, b) => {
    return b.length - a.length;
  });

  // if multiple words, put into array
  const longestWordArray = sorted.filter((word) => {
    return word.length === sorted[0].length;
  });

  // check if more than one array val
  if (longestWordArray.length === 1) {
    // return word
    return longestWordArray[0];
  } else {
    return longestWordArray;
  }
}
console.log(longestWord('Hello there, my name is Brad'));

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]
function chunkArray(array, len) {
  // init chunked array
  const chunkedArr = [];
  // set index
  let i = 0;

  // loop while index is less then array length
  while (i < array.length) {
    // slice out from the index to index + chunk length
    // and push on to the chunk array
    chunkedArr.push(array.slice(i, i + len));
    // increment by chunk length
    i += len;
  }

  return chunkedArr;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 4));
