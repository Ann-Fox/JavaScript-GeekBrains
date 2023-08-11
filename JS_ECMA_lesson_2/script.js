// Задание 1 (тайминг 20 минут)
console.log(`task 1`);
// 1. Создайте объект Person, представляющий человека, со следующими свойствами: name, age и gender. Добавьте также методы introduce и changeName. Метод introduce должен выводить информацию о человеке, включая его имя, возраст и пол. Метод changeName должен изменять имя человека на новое заданное значение.
const person = {
    name: 'John',
    age: 25,
    gender: 'male',
    introduce() { console.log(`My name is ${this.name}. I'm ${this.age} years old and I identify as ${this.gender}.`) },
    changeName(newName) {
        this.name = newName
    },
}

// person.name = "John";
// person.age = 25;
// person.gender = "male";
person.introduce(); // Ожидаемый результат: My name is John. I'm 25 years old and I identify as male.
person.changeName("Mike");


// Задание 2 (20минут)
console.log(`task 2`);
// 1. Создайте объект Animal со свойством name и методом eat(), который выводит сообщение о том, что животное ест. Создайте объект Dog со свойством name и методом bark(), который выводит сообщение о том, что собака лает. Используйте одалживание метода eat() из объекта Animal для объекта Dog, чтобы вывести сообщение о том, что собака ест.

// Одалживание метода eat() из объекта Animal к объекту Dog
const animal = {
    name: 'animal',
    eat() {
        console.log(`${this.name} is eating.`);
    },
};

const dog = {
    name: 'Rex',
    dark() {
        console.log(`${this.name} is dark`)
    },
    // eat: animal.eat,
};

animal.eat.call(dog);
// dog.eat = animal.eat;
// dog.eat(); // Вывод: Rex is eating.
dog.dark(); // Rex is dark


// Задание 3 (call, apply 20 минут)
console.log(`task 3`);
// 1. Создайте объект calculator с методами add(), subtract() и multiply(), которые выполняют соответствующие математические операции над двумя числами. Используйте методы call и apply для вызова этих методов с передачей аргументов.
const calculator = {
    add(num1, num2) {
        return num1 + num2;
    },
    subtract(num1, num2) {
        return num1 - num2;
    },
    multiply(num1, num2) {
        return num1 * num2;
    },
};
console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2

// Задание 4 (Объекты через class 25 минут)
console.log(`task 4`);
// 1. Создайте класс Person, который имеет свойства name и age, а также метод introduce(), который выводит сообщение с представлением имени и возраста персоны.
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
    }
}
const user = new User("John", 25);
user.introduce(); // Вывод: My name is John and I'm 25 years old.


// Задание 5 (Class 30 минут)
console.log(`task 5`);
// Создайте класс BankAccount, который представляет банковский счет.
// У него должны быть свойства accountNumber (номер счета) и balance
// (баланс), а также методы deposit(amount) для пополнения счета, 
// withdraw(amount) для снятия денег со счета и метод printBalance, 
// который отобразит в консоль текущий баланс счета. Класс должен иметь
// также статическое свойство bankName со значением "GBank", которое 
// содержит название банка.
class BankAccount {
    static bankName = 'GBank';
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        const error = validateAmount(amount);
        if (error !== null) {
            console.error(error);
            return;
        }
        this.balance += amount;
    }
    withdraw(amount) {
        const error = validateAmount(amount);
        if (error !== null) {
            console.error(error);
            return;
        }
        if ((this.balance - amount) <= 0) {
            console.error(`Insufficient funds in account ${this.accountNumber}`);
            return;
        }
        this.balance -= amount;
    };
    printBalance() {
        console.log(`${BankAccount.bankName} account "${this.accountNumber}" balance: ${this.balance}`);
    };
}

function validateAmount(amount) {
    if (!Number.isFinite(amount)) {
        return `Wrong deposit amount, must be a not Infinity.`; //не бесконечное число, строка и т.д.
    }
    if (amount <= 0) {
        return `Wrong deposit amount, must be a positive number.`;
    }
    return null;
}

const account1 = new BankAccount("1234567890", 1000);
account1.deposit(500); // 1500
account1.withdraw(200); //1300
account1.withdraw(1500); // Insufficient funds in account 1234567890
account1.withdraw(-200); // Wrong deposit amount, must be a positive number.
account1.deposit(-500); // Wrong deposit amount, must be a positive number.
account1.deposit(Infinity); // Wrong deposit amount, must be a positive number.
account1.printBalance(); // GBank account "1234567890" balance: 1300