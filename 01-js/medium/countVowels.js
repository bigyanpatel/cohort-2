/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // return str.split('').reduce((acc, char) => {
  //   if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
  //     return acc + 1;
  //   } else {
  //     return 0;
  //   }
  // }, 0)

  let count = 0;

  for(let i = 0; i < str.length; i++){
    const char = str.toLowerCase().charAt(i);
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      count++;
    }
  }

  return count;
}

module.exports = countVowels;