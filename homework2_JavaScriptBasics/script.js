// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
let num1 = prompt();
let num2 = prompt();
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
if (num1 <= 1) {
    alert(`num1=${num1} равна или меньше 1`)
} else {
    alert(`num1=${num1} НЕравна или больше 1`)
}

if (3 <= num2) {
    alert(`переменная num2=${num2} больше или равна 3`)
} else {
    alert(` переменная num2=${num2} меньше или НЕравна 3`)
}

// Задание 2
// Перепишите код к тернарному оператору

// let test = true;
// if (test === true) {
// console.log('+++');
// } else {
// console.log('---');
// }
let test = true ? console.log('+++') : console.log('---');

// third variant
console.log(test ? '+++' : '---');

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
let day = prompt();
if (0 < day && day <= 10) {
    alert(`day ${day} - первая декада месяца`)
} else if (10 < day && day <= 20) {
    alert(`day ${day} - вторая декада месяца`)
} else if (20 < day && day <= 31) {
    alert(`day ${day} - третья декада месяца`)
}

// Задание 4
// Необязательное задание. (Если вам показалось домашнее задание простым, выполняем данный пункт)
// (Для решения задания вам потребуется оператор остаток от деления %, например 10%3 === 1 , десять разделить на 3, остаток 1, второй пример 7 % 5, тут остаток от деления будет 2, ну и 3 пример это 14 % 10 === 4, остаток от деления на 10 будет равен 4)

// Необходимо от пользователя получить число.
let userNumber = prompt();
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.
const hundreds = Math.trunc(userNumber % 1000 /100);
const dozens = Math.trunc(userNumber % 100 / 10);
const units = Math.trunc(userNumber % 10);
alert(`В числе ${userNumber} количество сотен: ${hundreds}, десятков: ${dozens}, единиц: ${units}`);
// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

// Пример 2:
// Пользователь ввел число 74. Программа должна вывести:
// "В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

// Пример 3:
// Пользователь ввел число 9537. Программа должна вывести:
// "В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

// Уточнение: пользователь всегда вводит корректное положительное целое число.