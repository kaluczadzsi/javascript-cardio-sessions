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

// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
  return [].concat(...arrays);
}

// CHALLENGE 4: ANAGRAM
// Return true if anagram and false if not
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
  return formatStr(str1) === formatStr(str2);
}

// Helper funciton
// prettier-ignore
function formatStr(str) {
  return str
  .replace(/[^\w]/g, '')
  .toLowerCase()
  .split('')
  .sort()
  .join('');
}

// CHALLENGE 5: LETTER CHANGES
// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
  let newStr = str.replace(/[a-z]/gi, function (char) {
    if (char === 'z' || char === 'Z') {
      return 'a';
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  return newStr;
}

// Call Function
const output = letterChanges('Hello Therez');

console.log(output);
