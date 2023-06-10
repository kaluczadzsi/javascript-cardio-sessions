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
