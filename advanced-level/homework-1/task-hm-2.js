// Продвинутый JavaScript (семинары)
// Урок 1. Коллекции и итераторы. Модули
// Формат сдачи: ссылка на репозиторий.

// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:

// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента. В качестве ключей для клиентов используйте объекты.

// // Повара и их специализации: 
// 1. Map: специализация => повар
let specializations = new Map();

specializations.set("Пицца", "Виктор");
specializations.set("Суши", "Ольга");
specializations.set("Десерты", "Дмитрий");
 
// // Блюда и их повара:
// 2. Map: повар => Set блюда
let dishes = new Map();

let victor = { name: "Victor"};
let dishesVictor = ["Пицца 'Маргарита'", "Пицца 'Пепперони'"];
let victorDishes = new Set(dishesVictor);

let olga = { name: "Olga"};
let dishesOlga = ["Суши 'Филадельфия'", "Суши 'Калифорния'"];  
let olgaDishes = new Set(dishesOlga);

let dmitry = { name: "Dima"};
let dishesDmitry = ["Тирамису", "Чизкейк"];
let dmitryDishes = new Set(dishesDmitry);

dishes.set(victor, victorDishes);
dishes.set(olga, olgaDishes);
dishes.set(dmitry, dmitryDishes);


// 3. Map: клиент => Set блюда
let clients = new Map();

let aleksey = { name: "Aleksey"};
let dishesAleksey = ["Пицца 'Пепперони'", "Тирамису"];
let alekseyDishes = new Set(dishesAleksey);

let mariya = { name: "Mariya"};
let dishesMariya = ["Суши 'Калифорния'", "Пицца 'Маргарита'"];
let mariyaDishes = new Set(dishesMariya);

let irina = { name: "Irina"};
let dishesIrina = ["Чизкейк"];
let irinaDishes = new Set(dishesIrina);

clients.set(aleksey, alekseyDishes);
clients.set(mariya, mariyaDishes);
clients.set(irina, irinaDishes);


console.log(`Повар ${specializations.get("Пицца")} - специализация "Пицца": `); 

console.log(`Блюда, которые готовит Виктор: ${[...dishes.get(victor)]}`); 

console.log(`Клиент Мария заказала блюда: ${[...clients.get(mariya)]}`); 