// найти элемент по id.добавить событие прослушивания(по клику выполнить функцию addReview)
document.getElementById('addReviewButton').addEventListener('click', addReview);
window.onload = loadReviews;

// функция добавитьОтзыв
function addReview() {
    // присвоить переменной значение элемента по id.удалить пробелы
    const productName = document.getElementById('productNameInput').value.trim();
    const reviewText = document.getElementById('reviewInput').value.trim();

    // если input(productNameInput) или textarea(reviewText) не заполнены, показать сообщение об ошибке
    if (!productName || !reviewText) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    // присвоить переменной значение из localStorage
    const reviewsLocalStorage = localStorage.getItem('reviews')

    // разбирает строку JSON, возможно с преобразованием получаемого в процессе разбора значения
    let reviewsProduct = JSON.parse(reviewsLocalStorage) || {};


    if (!reviewsProduct[productName]) {
        reviewsProduct[productName] = [];
    }

    // если наиманование продукта совпадает, добавляем к данному продукту отзыв
    // {"яблоко":["зеленое яблоко спелое","гнилое невкусное"]}
    reviewsProduct[productName].push(reviewText);

    // возвращает JavaScript-значение, преобразованное в JSON-строку
    localStorage.setItem('reviews', JSON.stringify(reviewsProduct));

    // выполнить функцию загрузитьОтзывы
    loadReviews();

    document.getElementById('productNameInput').value = '';
    document.getElementById('reviewInput').value = '';
}

//  загрузитьОтзывы
function loadReviews() {

    // снова разбираем строку JSON
    const reviewsLoad = JSON.parse(localStorage.getItem('reviews')) || {};
    // проверка {"яблоко":["зеленое яблоко спелое","гнилое невкусное"]}
    console.log(reviewsLoad);
    // присваиваем переменной значение элемента по id
    const productsList = document.getElementById('productsList');
    // устанавливает или получает HTML разметку дочерних элементов productsList
    productsList.innerHTML = '';
    // в пустой div productsList помещаем данные о наименовании продукта и отзывы
    Object.keys(reviewsLoad).forEach(productName => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product productDiv';
        productDiv.innerHTML = `<h3>${productName}</h3>`;

        // проверка данных
        // яблоко(2) ['зеленое', 'красное'] 'яблоко' (2) ['зеленое', 'красное']
        console.log(reviewsLoad, productName, reviewsLoad[productName]);

        reviewsLoad[productName].forEach((review, index) => {

            // проаерка данных
            // 0 'зеленое' 'яблоко'
            //  1 'красное' 'яблоко'
            console.log(index, review, productName);

            // создаем элемент div
            const reviewDiv = document.createElement('div');
            // присваиваем класс review
            reviewDiv.className = 'review';
            // в div добавляем для каждого отзыва кнопку Удалить, по клику выполняем функцию deleteReview(удалитьОтзыв)
            reviewDiv.innerHTML = `${review} <button onclick="deleteReview('${productName}', ${index})">Удалить</button>`;
            productDiv.appendChild(reviewDiv);
        });

        productsList.appendChild(productDiv);
    });
}
// функция удалитьОтзыв
function deleteReview(productName, reviewIndex) {
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    // удалить один элемент(отзыв) в массиве по индексу 
    reviews[productName].splice(reviewIndex, 1);

    // если длина массива = 0, удалить наименование товара из отзывов
    if (reviews[productName].length === 0) {
        delete reviews[productName];
    }

    localStorage.setItem('reviews', JSON.stringify(reviews));
    // загрузитьОтзывы после изменений (перезагрузить)
    loadReviews();
}