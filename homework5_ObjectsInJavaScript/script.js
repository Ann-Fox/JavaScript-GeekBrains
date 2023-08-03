// Основы Javascript
// Урок 10. Семинар. Объекты в JavaScript
// Задание 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.
console.log('task 1');
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
}

for (const key in numbers) {
    if (numbers[key] >= 3) {
        console.log(numbers[key]);
    }
}

// Задание 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.
console.log('task 2');

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Задание 3
// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.
console.log('task 3');

const product = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];


product.forEach(prod => prod.price = prod.price * 0.85);
console.log(product);

// Задание 4

console.log('task 4');

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.

console.log(products.filter(product => 'photos' in product && 
product.photos.length !== 0));
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

console.log(products.sort((product1, product2) => 
product1.price - product2.price));

// []()
// []()


// **Задание 5**
// Дано 2 массива 
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.
const days = {};
if (en.length !== ru.length) {
    console.log(`Длинна массивов не совпадает`);
} else {
    for (let i = 0; i < en.length; i++) {
        days[en[i]] = ru[i];
    }
}
console.log(days);

// Данная промежуточная аттестация оценивается по системе "зачет" / "не зачет"
// "Зачет" ставится, если слушатель успешно выполнил
// "Незачет" ставится, если слушатель успешно выполнил

// Критерии оценивания:
// 1 - Слушатель создал консоль вывел все значения больше или равные 3.