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
  return parseInt(String(int).split('').reverse().join('')) * Math.sign(int);
}
console.log(reverseInt(1025445));

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'

function capitalizeLetters(str) {
  const words = str.split(' ');

  const strArr = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  });
  return strArr.join(' ');
}
console.log(capitalizeLetters('i love javascript'));

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') === 'a'

function maxCharacter(str) {
  const charMap = {};

  str.split('').forEach((char) => {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  });

  console.log(charMap);
}
maxCharacter('javascript');
