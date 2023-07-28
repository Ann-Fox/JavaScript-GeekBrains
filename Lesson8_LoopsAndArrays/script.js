// Основы Javascript
// Урок 8. Семинар. Циклы и массивы

// Задание 1 (тайминг 20 минут)
// Текст задания 
// 1. Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов.
let arrNumbers = [1, 2, 3];
for (let i = 0; i < arrNumbers.length; i++) {
    const element = arrNumbers[i];
    console.log(arrNumbers[i]);
}

// 2. Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве.
let arrRandom = [1, 2, 3, 4, 'a', 'b'];

console.log(`Количество элементов в массиве arrRandom [${arrRandom}] = ${arrRandom.length}`);

// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.

const arrStrNum = ['a', 'b', 'c'];
arrStrNum[0] = 1;
arrStrNum[1] = 2;
arrStrNum[2] = 3
console.log(arrStrNum);

// Задание 2 (тайминг 15 минут)
// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.
const array2 = [1, 2, 3];

for (let i = 0; i < array2.length; i++) {
    array2[i]++;
}
console.log(array2);

// 2. Узнайте длину следующего массива:
const arr = [];
arr[3] = 'a';
arr[8] = 'b';
console.log(arr.length);

// 3. Пусть дан такой массив:
const arr3 = [1, 2, 3];
// Добавьте ему в конец элементы 4 и 5.
arr3.push(4, 5);
console.log(arr3);

// 4. Создайте произвольный массив из 5 элементов, Удалите из него два элемента. Проверьте, какое станет значение свойства length после этого.

const arr4 = [1, 2, 3, 4, 5];
arr4.splice(arr4.length - 2, 2);
console.log(arr4);
console.log(arr4.length);


// Задание 3 (тайминг 25 минут)

// 1. С помощью цикла for выведите в консоль числа от 11 до 33.
for (let i = 11; i <= 33; i++) {
    console.log(i);
}

// 2. С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.
for (let i = 1; i < 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}
// 3. С помощью цикла for выведите в консоль числа от 100 до 0.
for (let i = 100; i >= 0; console.log(i--)) {
}
// 4. Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000.
let x = 0;
let num = 1;
while (num <= 1000) {
    num *= 3;
    x++;
}
console.log(num);
console.log(x);
// Какое число получится? Посчитайте количество итераций, необходимых для этого.



// Задание 4 (тайминг 25 минут)
console.log(`Task 4`);
// 1. Дан массив 
const array4 = [2, 5, 9, 15, 1, 4];
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.
for (let i = 0; i < array4.length; i++) {
    if (3 < array4[i] && array4[i] < 10) {
        console.log(array4[i]);
    }
}

// 2. Найдите сумму четных чисел от 2 до 100.

const sumNumbers = (num1, num2) => {
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    console.log(`сумму четных чисел от ${num1} до ${num2} = ${sum}`);
}
sumNumbers(2, 100);

// 3. Дан массив
const arrayElement = [2, 5, 9, 3, 1, 4];
// Найдите сумму элементов этого массива.

function summElementArray(array) {
    let summElement = 0;

    for (let i = 0; i < array.length; i++) {
        summElement += array[i];
    }
    console.log(`Сумма элементов массива = ${summElement}`);

}
summElementArray(arrayElement);


// 4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.
let str = '-';
for (let i = 0; i <= 9; i++) {
    str += i + '-';
}
console.log(str);

// 5. Дан массив с числами. 
const arrayNumber = [2, 5, 9, 0, 3, 1, 4];
// Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0.
for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] === 0) {
        break;
    } else {
        console.log(arrayNumber[i]);
    }
}
// После этого цикл должен завершить свою работу

// Задание 5 (тайминг 25 минут)
// 1. Пусть у нас дан массив состоящий из 10 элементов с произвольными числами. Давайте переберем его циклом и числа, которые делятся на 2, возведем в квадрат и выведем в консоль, а числа, которые делятся на 3, возведем в куб и выведем в консоль.
const arrayRandom = [1, 3, 5, 8, 9, 71, 6, 23];

function arraySquareCube(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(array[i] ** 2);
        } else if (array[i] % 3 === 0) {
            console.log(array[i] ** 3);
        }
    }
}

arraySquareCube(arrayRandom);

// 2. С помощью двух вложенных циклов выведите на экран следующую строку:
// [1,2,3],
// [4,5,6]
const dualMass1 = [];
for (i = 0; i < 2; i++) {
const dualMass2 = [];
for (j = 1; j <= 3; j++) {
if (i === 1) {
dualMass2[j] = j + 3;
} else {
dualMass2[j] = j;
}
}
dualMass1.push(dualMass2);
}
console.log(dualMass1);
// 3. Дан массив 
const arrCount = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.
let count = 0;
for (let i = 0; i < arrCount.length; i++) {
if (arrCount[i] === 3) {
count++;    
}    
}
console.log(`количество цифр 3 в этом массиве = ${count}`);
// 1. Дан следующий массив:
const arrSplice = [1, 2, 3, 4, 5];
// С помощью метода splice преобразуйте массив в следующий:
// [1, 4, 5]
arrSplice.splice(1,2);
console.log(arrSplice);