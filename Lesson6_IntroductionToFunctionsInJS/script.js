// Задание 1 (тайминг 20 минут)
// Текст задания
// 1. Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17" (только здесь данные, которые были переданы в функцию)
function getUserData(name, surname, age) {
    console.log(`Привет ${name} ${surname} с возрастом ${age}`);
}

getUserData('Ivan', 'Petrov', 17);

// 2. Создайте функцию которая возводит переданное число в квадрат
let getSquareNumber = (number) => number ** 2;
console.log(getSquareNumber(7));

// 3. Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.

const getNumberPositiveNegative = (userNumber) => {
    if (0 <= userNumber) {
        console.log(`+++`);
    } else {
        console.log(`---`);
    }
}

getNumberPositiveNegative(prompt(`Введите число`));

// second variant
function plusMinus(num) {
    console.log((num >= 0) ? '+++' : '---');
}
plusMinus(5);



// Задание 2 (тайминг 15 минут)
// 1. Сделайте функцию, которая параметрами принимает 3 числа и
// выводит в консоль сумму этих чисел.
function summ(a, b, c) {
    console.log(Number(a) + Number(b) + Number(c));
}
// 2. С помощью созданной вами функции выведите в консоль сумму
// значений этих переменных.
let param1 = '1';
let param2 = 2;
let param3 = 3;

summ(param1, param2, param3);

const summSecond = (a, b, c) => Number(a) + Number(b) + Number(c);
console.log(summ(param1, param2, param3));

// 1. Дана фукнция
function func(num = 5) {
    console.log(num * num);
}
// Расскажите, каким будет результат каждого из вызовов функции.
func(2);
func(3);
func();

// Задание 3 (тайминг 15 минут)
// 1. Сделайте функцию (Math.sqrt(x)), которая параметром принимает число, а возвращает квадратный корень из этого числа. 
const sqrt = (x) => Math.sqrt(x);

// С помощью этой функции найдите корень числа 3, затем найдите корень числа 4.
let a = sqrt(3);
let b = sqrt(4);
// console.log(a);
// console.log(b);

// Просуммируйте полученные результаты и выведите их в консоль. 
console.log(a + b);

// 2. Создайте функцию, которая находит минимальное число из 2х передаваемых аргументов функции
const minMax = (a, b) => ((a < b) ? a : b);
console.log(minMax(1, 2));
console.log(minMax(-1, -2));


// Задание 4 (тайминг 25 минут)
// 1. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
function dayOfThWeek(dayWeek) {
    switch (dayWeek) {
        case 1:
            console.log('Понедельник');
            break;
        case 2:
            console.log('Вторник');
            break;
        case 3:
            console.log('Среда');
            break;
        case 4:
            console.log('Четверг');
            break;
        case 5:
            console.log('Пятница');
            break;
        case 6:
            console.log('Суббота');
            break;
        case 7:
            console.log('Воскресенье');
            break;
        default:
            break;
    }
}
dayOfThWeek(Number(prompt(`Введите число от 1 до 7`)));


// 2. Написать функцию, которой передаем имя и она возвращает приветствие в зависимости от времени суток (Доброе
// утро\день\вечер\ночи Иван)
// с 0 до 6 часов — ночь 
// с 6 до 12 часов — утро 
// с 12 до 18 часов — день 
// с 18 до 24 часов — вечер

function timesOfDay(userName) {

}