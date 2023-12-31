// Работа с window
// console.log(window);
// const newWindow = window.open('https://www.example.com', '_blank'); //открывает новое окно браузера
// window.close(); //закрывает текущее окно
// window.resizeTo(800, 600); //Изменяет размер окна на 800х600 пикселей
// console.log(window.location);
// window.location.href = 'https://www.example.com'; //Перенаправляет на другую страницу
// const windowWidth = window.innerWidth; // Получает ширину окна

// Работа с window.window
const isWindowOpen = window.window.open('https://www.example.com') !== null; //проверяет, открыто ли окно
const windowHeight = window.innerHeight; // Получает высоту окна
window.window.location.href = 'https://www.example.com'; //Перенаправляет на другую страницу во вложенном окне