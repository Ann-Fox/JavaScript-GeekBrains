// Создать интерактивную веб-страницу, которая позволяет пользователям регистрироваться и входить в систему, используя данные, сохраненные в LocalStorage.

// Приложение будет состоять из трёх основных страниц:

// Страница регистрации:
// Предлагает пользователю ввести логин и пароль.
// После ввода данных, они сохраняются в LocalStorage.
// Пользователь перенаправляется на страницу входа.
// Страница входа:
// Предлагает пользователю ввести логин и пароль.
// Если введенные данные совпадают с данными из LocalStorage, пользователь перенаправляется на страницу приветствия.
// Если данные не совпадают, выводится сообщение об ошибке.
// Страница приветствия:
// Простое приветственное сообщение для авторизованного пользователя.
// Кнопка "Выйти", при нажатии на которую пользователь возвращается на страницу входа.

const regLogin = document.querySelector('.reg_login');
const regPassword = document.querySelector('.reg_password');
// const regBtn = document.querySelector('.reg_btn')
// const regLink = document.querySelector('.reg__link')
const reg = document.querySelector('.reg')
const regBtn = document.getElementById('reg_btn')


const enterLogin = document.querySelector('.enter_login');
const enterPassword = document.querySelector('.enter_password');
const enterBtn = document.querySelector('.enter_btn');
// const enterLink = document.querySelector('.enter__link')
const enterForm = document.querySelector('.enter__form')

const helloDiv = document.querySelector('.hello')
const helloBtn = document.querySelector('.hello_btn')

// regLink.style.display = 'none'
// enterLink.style.display = 'none'


if (regBtn) {
    regBtn.addEventListener('click', function () {
        localStorage.setItem('login', `${regLogin.value}`);
        localStorage.setItem('password', `${regPassword.value}`);
        window.location.href = 'index.html'
    })
}

if (reg) {
    reg.addEventListener('click', function () {
        // localStorage.setItem('login', `${regLogin.value}`);
        // localStorage.setItem('password', `${regPassword.value}`);
        window.location.href = 'registration.html'
    })
}

if (enterBtn) {
    enterBtn.addEventListener('click', function () {
        if (
            enterLogin.value === localStorage.getItem('login') && enterPassword.value === localStorage.getItem('password')
        ) {
            window.location.href = 'hello.html'
        } else {
            document.body.insertAdjacentHTML('afterbegin', `<h3>Введены некорректные данные<h3>`)
        }
    })
}

if (helloDiv) {
    helloDiv.addEventListener('DOMContentLoaded', function () {
        alert('Привет!')
    })
}

if (helloBtn) {
    helloBtn.addEventListener('click', function () {
        // localStorage.setItem('login', `${regLogin.value}`);
        // localStorage.setItem('password', `${regPassword.value}`);
       localStorage.removeItem('login');
       localStorage.removeItem('password');
       
        window.location.href = 'index.html'
    })
}