'use strict';

// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello) === 'olleh

function reverseString(str) {
  str = str.split('').reverse().join('');
  return str;
}

reverseString('hello');
