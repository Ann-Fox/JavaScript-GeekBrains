// JavaScript про ECMAScript (семинары)
// Урок 1. Функциональный Javascript
// Домашнее задание

// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
// console.log(`task 1`);

// const arr = [1, 5, 7, 9, -8];
// console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
console.log(`task 2`);

function createCounter(initialValue) {
    let num = initialValue;
    return {
        increment()  {
            num++;
        },
        decrement() {
            num--;
        },
        getValue() {
            return num;
        },
    };
}

const calcCounter = createCounter(10);
calcCounter.increment(); //11
calcCounter.decrement(); //10
calcCounter.decrement(); //9
calcCounter.decrement(); //8

console.log(calcCounter.getValue());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
console.log(`task 2`);

// Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement)