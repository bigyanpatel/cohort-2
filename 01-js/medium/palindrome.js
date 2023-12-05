/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isAlphanumeric(char) {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) ||
    (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122)
  );
}

function isPalindrome(str) {
  // let cleanedString = '';
  // str = str.toLowerCase(); 

  // for (let i = 0; i < str.length; i++) {
  //   if (isAlphanumeric(str[i])) {
  //     cleanedString += str[i];
  //   }
  // }

  const cleanedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  let left = 0;
  let right = cleanedString.length - 1;

  while (left < right) {
    if (cleanedString[left] !== cleanedString[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

module.exports = isPalindrome;
