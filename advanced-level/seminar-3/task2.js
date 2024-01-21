//  Вы разрабатываете онлайн-магазин по заказу индивидуальных мебельных комплектов. Посетители сайта могут выбирать разные элементы мебели, цвета и материалы для своего гарнитура. После того как пользователь собрал свой комплект и сохраняет свой выбор, информация о нем сохраняется в куки. При следующем посещении сайта их индивидуальные настройки автоматически загружаются, и они видят ранее созданный мебельный комплект.

// 1. Создайте базовую HTML-структуру с различными элементами мебели (например, стол, стул, диван) и возможными параметрами для них (цвет, материал, дизайн).
// 2. Пользователи могут выбирать разные элементы и параметры, чтобы составить свой мебельный гарнитур.
// 3. После выбора всех желаемых параметров предоставьте кнопку "Сохранить комплект", которая сохраняет текущий выбор пользователя в куки.
// 4. При следующем посещении сайта автоматически загрузите сохраненные параметры из куки и отобразите ранее созданный комплект.
// 5. Убедитесь, что у пользователей есть возможность очистить сохраненные настройки (очистить куки).
// Эдуард Воронин <h1>Создайте свой мебельный гарнитур</h1> 

let saveBtn = document.querySelector('#save-btn');
let loadBtn = document.querySelector('#load-btn');
let clearBtn = document.querySelector('#clear-btn');

let selectedTableColor = document.querySelector('#table-color');
let selectedChairMaterial = document.querySelector('#chair-material');

let cookiesArray = [];

saveBtn.addEventListener('click', function () {
    document.cookie = `tableColor=${selectedTableColor.value}`;    
    document.cookie = `chairMaterial=${selectedChairMaterial.value}`;    
});

loadBtn.addEventListener('click', function () {
    selectedTableColor.value = document.cookie.split(';')[1].split('=')[1];    
    selectedChairMaterial.value = document.cookie.split(';')[1].split('=')[1];    
});

clearBtn.addEventListener('click', function () {
    document.cookie = 'NAME=max-age; path=/; expires=-1';
    document.cookie = 'NAME=tableColor; path=/; expires=-1';
    document.cookie = 'NAME=chairMaterial; path=/; expires=-1';
});