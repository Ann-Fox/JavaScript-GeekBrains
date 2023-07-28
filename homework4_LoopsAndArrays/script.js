// Основы Javascript
// Урок 8. Семинар. Циклы и массивы

// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i < 11; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 !== 0) {
        console.log(`${i} - нечетное число`);

    } else if (i % 2 === 0) {
        console.log(`${i} - четное число`);

    }
}

// Задание 2
// Дан массив 
const array = [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
array.splice(3, 2);
console.log(array);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
function createRandomArray(min, max, arrayLength) {
    const arr = [];
    for (let i = 0; i < arrayLength; i++) {
        arr.push(Math.floor(Math.random() * (max - min) + min));
    }
    return arr;
}
const arrayRandom = createRandomArray(0, 9, 5);
console.log(arrayRandom);

// 1. Рассчитать сумму элементов этого массива
function summElementArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

const summElement = summElementArray(arrayRandom);
console.log(summElement);

// 2. Найти минимальное число
function minNumber(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

const minElementArray = minNumber(arrayRandom);
console.log(minElementArray);

// 3. Найти есть ли в этом массиве число 3
function searchThree(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 3) {
            return `В этом массиве [${array}] есть число 3`;
        }
    } 
    return `В этом массиве [${array}] нет числa 3`;
}

const searchNumberThree = searchThree(arrayRandom);
console.log(searchNumberThree);

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

for (let i = 0; i < 20; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
        str += "x";
    }
    console.log(str);
}