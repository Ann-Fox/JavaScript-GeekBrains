// Продвинутый JavaScript (семинары)
// Урок 1. Коллекции и итераторы. Модули
// Формат сдачи: ссылка на репозиторий.

// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство-символ Symbol.iterator. Каждый альбом имеет следующую структуру:

// {
// title: "Название альбома",
// artist: "Исполнитель",
// year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection. Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: Название альбома - Исполнитель (Год выпуска)

const songs = [
    { title: "Группа крови", artist: "Кино", year: 1988 },
    { title: "Love at First Sting", artist: "Scorpions", year: 1984 },
    { title: "Unicorn", artist: "Therr Maitz", year: 2015 },
];

const musicCollection = {
    songs: [...songs],

    [Symbol.iterator]: function () {
        let index = 0;
        return {
            next: () => {
                if (index < this.songs.length) {
                    return {value: this.songs[index++], done: false}
                } else {
                    return {done: true};
                }
            }
        }
    }
}

for (const song of songs) {
    console.log(`${song.title} - ${song.artist} (${song.year})`);
}