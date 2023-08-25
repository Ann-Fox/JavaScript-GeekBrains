// JavaScript про ECMAScript (семинары)
// Урок 4. Асинхронность в Javascript
// Домашнее задание

// Задание 1. Получение данных о пользователе.

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/
function getUserData(ID) {
    fetch(`https://reqres.in/api/users`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(text => console.log(text))
        .catch(console.error(error));
}

getUserData(3);

// Задание 2. Отправка данных на сервер.

// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.

// *Подсказка *

// // Пример использования функции
// const user = {
//   "name": "John Doe",
//   "job": "unknown"
// };

// saveUserData(user)
//   .then(() => {
//     console.log('User data saved successfully');
//   })
//   .catch(error => {
//     console.log(error.message);
//   });
// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /api/users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 201), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

// Работа должна быть выполнена с API: https://reqres.in/

const user = {
    "name": "John Doe",
    "job": "unknown"
};

function saveUserData(user) {
    fetch(`https://reqres.in/api/users`, {
        method: 'POST',
        body: JSON.stringify(user),
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(() => {
            console.log('User data saved successfully');
        })
        .catch(error => {
            console.log(error.message);
        });
}

saveUserData(user);


// Готовое решение

// Задание 1. Получение данных о пользователе.
// function getUserData(ID) {
//     fetch('https://reqres.in/api/users')
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             }
//         })
//         .then(json => {
//             let result = json.data.filter(e => e.id === ID);
//             if (result.length < 1) {
//                 throw new Error('Пользователь не найден.');
//             }
//             console.log(result[0]);
//         })
//         .catch(error => console.log(error));
// }

// getUserData(2);

// Задание 2. Отправка данных на сервер.
// const user = {
//     name: "John Doe",
//     job: "unknown",
// };

// function saveUserData(user) {
//     fetch('https://reqres.in/api/users', {
//         method: 'POST', // Здесь так же могут быть GET, PUT, DELETE
//         body: JSON.stringify(user), // Тело запроса в JSON-формате
//         headers: {
//             // Добавляем необходимые заголовки
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             }
//         })
//         .then((data) => {
//             console.log(data);
//         })
//         .then(() => {
//             console.log('User data saved successfully');
//         })
//         .catch(error => {
//             console.log(error.message);
//         });
// }
// saveUserData(user);