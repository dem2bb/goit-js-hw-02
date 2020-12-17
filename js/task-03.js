const findLongestWord = function (string) {
  string = string.split(' ');
  let longestWord = '';
  for (let i = 0; i < string.length; i++) {
    if (longestWord.length < string[i].length) {
      longestWord = string[i];
    }
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
