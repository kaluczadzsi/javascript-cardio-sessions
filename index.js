'use strict';

// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello) === 'olleh

function reverseString(str) {
  str = str.split('').reverse().join('');
  return str;
}
console.log(reverseString('test'));

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') === false

function isPalindrome(str) {
  return str.toLowerCase().split('').reverse().join('') === str;
}
console.log(isPalindrome('heal'));

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  return String(int).split('').reverse().join('');
}
console.log(reverseInt(521));
