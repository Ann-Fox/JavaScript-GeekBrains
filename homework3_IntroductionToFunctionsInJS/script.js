// Основы Javascript

// Урок 6. Семинар. Знакомство с функциями в JavaScript

// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени
const cubNumber = (number) => number ** 3;
console.log(cubNumber(2) + cubNumber(3));

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
let userSalary = Number(prompt(`Введите вашу ЗП`));

if (Number.isInteger(userSalary)) {
    alert(`Значение задано верно, идет подсчет заработной платы`);
} else {
    alert(`Значение задано неверно`);
}
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

function salaryMinusTax(salary) {
    let tax = salary * 0.13;
    console.log(`Размер заработной платы за вычетом налогов равен ${salary - tax}`);
}

salaryMinusTax(userSalary);


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел
let numberFirst = prompt(`Введите первое число`);
let numberSecond = prompt(`Введите второе число`);
let numberThird = prompt(`Введите третье число`);

function numMaxMin(numberFirst, numberSecond, numberThird) {
    let numberMax = numberFirst
    if (numberFirst < numberSecond) {
        numberMax = numberSecond;
    } else {
        numberMax = numberFirst;
    }

    if (numberMax < numberThird) {
        numberMax = numberThird
    }

    alert(`Максимальное значение среди чисел: ${numberFirst}, ${numberSecond}, ${numberThird} = ${numberMax}`);
}

numMaxMin(numberFirst, numberSecond, numberThird);

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
let firstNumber = Number(prompt(`Введите первое число`));
let secondNumber = Number(prompt(`Введите второе число`));

// 1. Сложение
const summ = (firstNumber, secondNumber) => firstNumber + secondNumber;

console.log(`1. Сложение: ${firstNumber} + ${secondNumber} = ${summ(firstNumber, secondNumber)}`);

// 2. Разность
const minNumber = (firstNumber, secondNumber) => {
    return ((firstNumber < secondNumber) ? firstNumber : secondNumber);
}

const maxNumber = (firstNumber, secondNumber) => {
    return ((firstNumber < secondNumber) ? secondNumber : firstNumber);
}

const difference = (minNumber, maxNumber) => maxNumber - minNumber;

console.log(`2. Разность: ${maxNumber(firstNumber, secondNumber)} - ${minNumber(firstNumber, secondNumber)} = ${difference(minNumber(firstNumber, secondNumber), maxNumber(firstNumber, secondNumber))}`);

// 3. Умножение
const multi = (firstNumber, secondNumber) => firstNumber * secondNumber;
console.log(`3. Умножение: ${firstNumber} * ${secondNumber} = ${multi(firstNumber, secondNumber)}`);

// 4. Деление
const division = (firstNumber, secondNumber) => firstNumber / secondNumber;
console.log(`3. Умножение: ${firstNumber} / ${secondNumber} = ${division(firstNumber, secondNumber)}`);

// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.