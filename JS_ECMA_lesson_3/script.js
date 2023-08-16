// Задание 1 (тайминг 20 минут)
console.log(`task 1`);
// Напишите функцию getPrototypeChain(obj), которая будет возвращать цепочку прототипов для заданного объекта obj. Функция должна вернуть массив прототипов, начиная от самого объекта и заканчивая глобальным объектом Object.prototype.
const arr = [];
function getPrototypeChain(obj) {
    const arrayPrototype = [];
    for (let proto = Object.getPrototypeOf(obj); proto !== null; proto = Object.getPrototypeOf(proto)) {
        arrayPrototype.push(proto);
    }
    return arrayPrototype;
}
// console.log(getPrototypeChain(arr));
console.log(getPrototypeChain(document.body));

// Задание 2 (20минут)
console.log(`task 2`);
// Напишите конструктор объекта Person, который принимает два аргумента: name (строка) и age (число). Конструктор должен создавать объект c указанными свойствами name и age и методом introduce(), который выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
// Пример:
// function Person(name, age) {
//     // в this создается новый объект this = {}
//     // в this.__proto__ = Person.prototype
//     this.name = name;
//     this.age = age;
//     // this.introduce = function () {
//     //     console.log(`Меня зовут ${this.name} и мне ${this.name} лет.`);
//     // };
//     // return this
// }

// Person.prototype.introduce = function () {
//     console.log(`Меня зовут ${this.name} и мне ${this.name} лет.`);
// };

// ссылка на лекцию
// https://youtu.be/Su9Gml6xUUU

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    introduce() {
        console.log(`Меня зовут ${this.name} и мне ${this.name} лет.`);
    };
}

const person1 = new Person("John", 25);
console.log(person1);
person1.introduce(); // Вывод: Меня зовут John и мне 25 лет


// Задание 3 (call, apply 20 минут)
console.log(`task 3`);
// Напишите конструктор объекта BankAccount, который будет представлять банковский счет. Конструктор должен принимать два аргумента: accountNumber (строка) и balance (число). Конструктор должен создавать объект с указанными свойствами accountNumber и balance и следующими методами: 
// 1. deposit(amount): принимает аргумент amount (число) и увеличивает баланс на указанную сумму.
// 2. withdraw(amount): принимает аргумент amount (число) и уменьшает ,баланс на указанную сумму, если на счету есть достаточно средств.
// Если средств недостаточно, выводится сообщение "Недостаточноб средств на счете.".
// 3. getBalance(): возвращает текущий баланс счета


// Задание 3 (Пример )
const account1 = new BankAccount("1234567890", 1000);
console.log(account1.getBalance()); // Вывод: 1000
account1.deposit(500);
console.log(account1.getBalance()); // Вывод: 1500
account1.withdraw(200);
console.log(account1.getBalance()); // Вывод: 1300
account1.withdraw(2000); // Вывод: "Недостаточно средств на счете."

// Задание 4 (Class 30 минут)
// Создайте класс Animal, который будет представлять животное. У класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name] принесла мяч.".


// Задание 5 (Пример использования)
// const animal1 = new Animal("Животное");
// animal1.speak(); // Вывод: Животное издает звук.
// const dog1 = new Dog("Бобик", "Дворняжка");
// dog1.speak(); // Вывод: Животное Бобик издает звук.
// console.log(dog1.breed); // Вывод: Дворняжка
// dog1.fetch(); // Вывод: Собака Бобик принесла мяч.