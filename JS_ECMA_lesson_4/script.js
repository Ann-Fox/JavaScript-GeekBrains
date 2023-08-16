//Task 1
//  1. Создайте функцию delayedMessage(message, delay),
// которая принимает аргументы message (строка) и delay
// (число). Функция должна выводить заданное сообщение в
// консоль через указанную задержку.
// 2. Вызовите функцию delayedMessage() три раза с разными
// сообщениями и задержками.
// 3. После вызова всех функций delayedMessage(), добавьте
// сообщение вида "Конец программы" с помощью
// console.log().

// Решение
// let count = 0;
// function delayedMessage(message, delay) {
//     count++;

//     setTimeout(() => {
//         console.log(message)
//         if (count === 1) {
//             console.log(`Конец программы`);
//         }
//         count--;
//     }, delay);
// };

// delayedMessage("Сообщение 1", 2000);
// delayedMessage("Сообщение 2", 1000);
// delayedMessage("Сообщение 3", 3000);


// Ожидаемый результат:
// "Сообщение 2"
// "Сообщение 1"
// "Сообщение 3"
// "Конец программы"



// Task 2
// У вас есть список задач, которые необходимо выполнить в определенном порядке. Каждая задача должна быть выполнена через определенный промежуток времени, заданный в миллисекундах. Вам необходимо написать функцию, которая принимает список задач и интервал времени, а затем
// выполняет каждую задачу через определенный промежуток времени.

const tasks = [
    { name: 'task1', time: 1000 },
    { name: 'task2', time: 2000 },
    { name: 'task3', time: 3000 },
    { name: 'task4', time: 4000 },
    { name: 'task5', time: 5000 },
];

// Решение 1
// function handler(array) {
//     for (let i = 0, time = 0; i < array.length; i++) {
//         setTimeout(() => {
//             console.log(`${array[i].name}`);
//         }, time += tasks[i].time);
//     }
// }

// handler(tasks);

// Решение 2
// function handler(array) {
//     let i = 0;
//     const fn = () => {
//         console.log(`${array[i].name}`);
//         i++;
//         if (array[i]) {
//             setTimeout(fn, tasks[i].time);
//         }
//     };
//     setTimeout(fn, tasks[i].time);
// }

// handler(tasks);


// Task 3
// Напишите программу, которая загружает данные с сервера с
// использованием объекта XMLHttpRequest и отображает полученную
// информацию в консоли.
// 1. Создайте функцию loadData(url), которая принимает аргумент url
// (строка) - адрес сервера для загрузки данных.
// 2. Внутри функции loadData() создайте объект XMLHttpRequest с
// помощью new XMLHttpRequest().    
// 3. Зарегистрируйте обработчик события onreadystatechange, который
// будет вызываться при изменении состояния запроса. Проверьте,
// если readyState равен 4 (успешно выполнен запрос) и status равен
// 200 (успешный статус ответа сервера), то выведите полученные
// данные в консоль с помощью console.log(xhr.responseText).
// Задание 2 продолжение
// 4. Откройте запрос с помощью xhr.open("GET", url, true), где "GET" - тип  запроса, url - адрес сервера, true - асинхронный режим запроса.
// 5. Отправьте запрос на сервер с помощью xhr.send().
// 6. Выведите в консоль слово "привет", после вызова функции.
// Дополнительно:
// а) Откройте запрос с помощью xhr.open("GET", url, false), где "GET" - тип  запроса, url - адрес сервера, false - асинхронный режим запроса. Посмотрите, что изменится, объясните почему. Какой вариант чаще используется/лучше?
// б) Переписать на fetch с обработкой ошибок.

// API: https://jsonplaceholder.typicode.com/users

// Решение 1
// function loadData(url) {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//             console.log(xhr.responseText);
//         }
//     };
//     xhr.open("GET", url, true);

//     xhr.send();
// }


// Решение 2
// function loadData(url) {
//     const xhr = new XMLHttpRequest();
//     xhr.onload = () => {
//         if (xhr.status === 200) {
//             console.log(xhr.responseText);
//         }
//     };
//     xhr.open("GET", url, true);
//     xhr.send();
// }


// Решение 3
// function loadData(url) {
//     fetch(url)
//         .then((resp) => {
//             if (resp.ok) {
//                 return resp.json();
//             }
//         })
//         .then(text => console.log(text))
//         .catch(console.error(error));
// }


// Решение 4 async
// async function loadData(url) {
//     try {
//         const resp = await fetch(url);
//         if (resp.ok) {
//             console.log(await resp.json());
//         }
//     } catch (error) {
//         console.error(error);
//     }
// }

loadData(`https://jsonplaceholder.typicode.com/users`);
console.log(`hello`);
console.log(`hello`);

// Дополнительно:
// а) Откройте запрос с помощью xhr.open("GET", url, false), где "GET" - тип  запроса, url - адрес сервера, false - асинхронный режим запроса. Посмотрите, что изменится, объясните почему. Какой вариант чаще используется/лучше?
// б) Переписать на fetch с обработкой ошибок.

// Решение 2
// function loadData(url) {
//     const xhr = new XMLHttpRequest();
//     xhr.onload = () => {
//         if (xhr.status === 200) {
//             console.log(xhr.responseText);
//         }
//     };
//     xhr.open("GET", url, false);
//     xhr.send();
// }



// Необходимо получить список пользователей с сервера, отсортировать их
// в алфавитном порядке и вывести в тег ul (его необходимо создать в html) на странице данный список пользователей.
// API: https://jsonplaceholder.typicode.com/users

// Решение 2
function loadData(url) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onload = () => {
        if (xhr.status === 200) {
            const users = xhr.response;
            const userP = users
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((user) => `<li>${user.name}</li>`)
                .join(``);
document.querySelector(`.content`).innerHTML = userP;
            console.log(userP);
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}