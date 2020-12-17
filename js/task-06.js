let input;
let numbers = [];
let total = 0;

do {
  input = prompt('Введите число!');
  input = Number(input);

  if (!input) {
    for (const number of numbers) {
      total += number;
    }
  }
  numbers.push(input);
} while (input);

console.log(`Общая сумма чисел равна ${total}`);
