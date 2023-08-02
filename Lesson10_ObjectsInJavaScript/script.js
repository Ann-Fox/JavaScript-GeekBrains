// Основы Javascript
// Урок 10. Семинар. Объекты в JavaScript
// Задание 1 (тайминг 20 минут)
// Текст задания
// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран “Вторник”
const dayWeek = {
    1: 'понедельник',
    2: 'вторник',
    3: 'среда',
    4: 'четверг',
    5: 'пятница',
    6: 'суббота',
    7: 'воскресенье'
};
console.log(dayWeek[2]);

// 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
const user = {
    name: 'Ann',
    surname: 'Fox',
    age: '32'
}
// Выведите на экран фамилию, имя и возраст через дефис.
console.log(`${user.surname}-${user.name}-${user.age}`);

// 3. Добавьте в объект user свойство отчество, которое пользователь должен ввести с клавиатуры
user.lastname = prompt('Введите ваше отчество');
console.log(user);

// 4. Удалите свойство surname
delete user.surname;


// Задание 2 (тайминг 25 минут)
// 1. Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
const days = {};
for (let i = 0; i < arr2.length; i++) {
    days[arr2[i]] = arr1[i];
}
console.log(days);

// 2. Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.
const obj = { x: 1, y: 2, z: 3 };

for (const key in obj) {
    obj[key] **= 2;
    console.log(obj[key]);

}
console.log(obj);


// Задание 3 (тайминг 15 минут)
const objectNum = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}
// Найдите сумму элементов приведенного объекта.
let sum = 0;

for (const key in obj) {
    console.log(obj[key]);

for (const key2 in obj[key]) {
sum += obj[key][key2];
}
}
console.log(sum);

// решение преподавателя
console.log(
    Object.values(objectNum)
    .map(item => Object.values(item)
    .reduce((sum, a) => sum + a, 0))
    .reduce((partialSum, a) => partialSum + a, 0)
    );


// Задание 4 (тайминг 30 минут)
// 1. Создайте объект riddles
const riddles = {

};

// 2. Добавьте свойства question, answer
riddles.question = 'Зимой и летом одним цветом';
riddles.answer = 'елка';
// 3. создайте метод askQuestion который спрашивает у пользователя вопрос question и сравнивает ответ с answer
// 4. Если ответил неверно, то в консоль выводится текст: “вы проиграли”
function askQuestion (object){
    if (prompt(object.question) === object.answer) {
        console.log('Верно');
    } else {
        console.log('вы проиграли');
    }
};
askQuestion(riddles);
// 5. * По желанию, создать 2 подсказки, если пользователь ответил неверно