const findLongestWord = function (string) {
  let massive = string.split(' ');
  let stringMaxWidth = 0;
  let responseIndex;

  for (let i = 0; i < massive.length; i++) {
    if (stringMaxWidth < massive[i].length) {
      stringMaxWidth = massive[i].length;
      responseIndex = i;
    }
  }
  return massive[responseIndex];
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force
