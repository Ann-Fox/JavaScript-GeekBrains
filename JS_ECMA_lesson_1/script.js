// Задание 1 (тайминг 20 минут)
console.log('task 1');
// 1. Создайте функцию mergeArrays, которая принимает два массива и возвращает новый массив, содержащий все элементы из обоих массивов. Используйте spread оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1,2, 3, 4, 5, 6]
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
function mergeArrays(array1, array2) {
    return [...array1, ...array2];
}
console.log(mergeArrays(arr1, arr2));

// 2. Создайте функцию removeDuplicates, которая принимает любое количество аргументов и возвращает новый массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в массив а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый результат: [1, 2, 3, 4, 5]

// variant first

const arr = [1, 2, 3, 2, 4, 5, 6, 6, 7, 8, 8, 9];
// function removeDuplicates(...rest) {
//     return rest.filter((value, index) => {
// return rest.indexOf(value) === index;
//     });
// }

// console.log(removeDuplicates(...arr));

// variant teacher
function removeDuplicates(...rest) {
    return [...new Set(rest).values()];
}

console.log(removeDuplicates(...arr));


// Задание 2 (Чистые функции 25минут)
console.log('task 2');
// Текст задания
// 1. Напишите функцию getEvenNumbers, которая принимает массив чисел в качестве аргумента и возвращает новый массив, содержащий только четные числа.
const arrayNumbers = [1, 2, 3, 5, 6, 8, 12, 55];

function getEvenNumbers(array) {
    return array.filter((value) => value % 2 === 0)
}

console.log(getEvenNumbers(arrayNumbers));

// 2. Задача: Напишите функцию calculateAverage, которая принимает массив чисел в качестве аргумента и возвращает среднее значение этих чисел.
function calculateAverage(array) {
    return array.reduce((acc, value) => acc + value, 0) / array.length;
}

console.log(calculateAverage(arrayNumbers));

// 3. Напишите функцию capitalizeFirstLetter, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первая буква каждого слова является заглавной.
function capitalizeFirstLetter(str) {
    return str
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

console.log(capitalizeFirstLetter('hello word, people!!!'));;

// Задание 3 (Замыкания 20 минут)
console.log('task 3');
// 1. Напишите функцию createCalculator, которая принимает начальное значение и возвращает объект с двумя методами: add и subtract.
function createCalculator(initialValue) {
    let value = initialValue;
    return {
        // Метод add должен увеличивать значение на переданное число, а метод subtract должен уменьшать значение на переданное число.
        add(num) {
            value += num;
        },
        subtract(num) {
            value -= num;
        },
        // Значение должно быть доступно только через методы объекта, а не напрямую.
        getValue() {
            return value;
        },
    };
}

const calculator = createCalculator(10);
calculator.add(10);
calculator.subtract(2);
console.log(calculator.getValue());


// Задание 4 (Лексический контекст 15 минут) Замыкание
console.log('task 4');
// 1. Напишите функцию createGreeting, которая принимает имя пользователя и возвращает функцию, которая будет выводить приветствие с использованием этого имени.
// Пример использования:
const greeting = createGreeting('John');
const greeting2 = createGreeting('Ann');

function createGreeting(userName) {
    return () => console.log(`Hello, ${userName}!`);    
}

greeting(); // Ожидаемый результат: "Hello, John!"
greeting2();

// Задание 5 (тайминг 15 минут)
console.log('task 5');
// 1. Задача: Напишите функцию createPasswordChecker, которая принимает допустимую длину пароля в качестве аргумента и возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать true, если его длина соответствует допустимой, и false в противном случае.
// Пример использования:
const isPasswordValid = createPasswordChecker(8);

function createPasswordChecker(lengthPassword) {
    return (userPassword) => userPassword.length >= lengthPassword;
}

console.log(isPasswordValid('password')); // Ожидаемый результат: true
console.log(isPasswordValid('secret')); // Ожидаемый результат: false

// Задание 6 (Рекурсия 25 минут)
console.log(`task6`);
// 1. Напишите рекурсивную функцию sumDigits, которая принимает положительное целое число в качестве аргумента и возвращает сумму его цифр.

//variant first
// function sumDigits(number) {
//     return String(number).split('').reduce((acc, strNum) => acc + Number(strNum), 0);
// }

// Пример использования:
console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)

//varian teacher
function sumDigits(num) {
    if (num < 10) {
        return num;
    } 
    return num % 10 + sumDigits(Math.trunc(num / 10));
    
}