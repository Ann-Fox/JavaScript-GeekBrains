// Основы Javascript
// Урок 2. Семинар. Знакомство с JavaScript

// Задание 1
// Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, преобразовать значение в температуру по фаренгейту.
// Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Вывести в консоль температуру в Цельсиях и Фаренгейтах.
const degreeCelsius = 20;
let degreeFahrenheit = (9 / 5) * degreeCelsius + 32;
console.log(`${degreeCelsius}\xB0C = ${degreeFahrenheit}\xB0F`);


// Задание 2
// Необходимо создать переменную name, записать в эту переменную свое имя. Необходимо также создать переменную admin и присвоить этой переменной значение из переменной name. Вывести значение переменной admin в консоль.
const name = 'Anna';
let admin = name;
console.log(admin);