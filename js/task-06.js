let input;
let message;
let numbers = [];
let total = 0;

while (true) {
  input = prompt('Введите число');

  if (!+input) {
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    message = `Общая сумма чисел равна ${total}`;
    break;
  }
  input = Number(input);
  const notANumber = Number.isNaN(input);

  if (notANumber) {
    alert('Было введено не число, попробуйте еще раз!');
    continue;
  }
  numbers.push(input);
}
console.log(message);
