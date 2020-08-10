/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

function writeYourGenres(db) {
    for (let i=1; i<4; i++) {
        const genre = prompt(`Your favorite genre with number #${i}`);
        db.genres.push(genre);
    }
}
    

// Код возьмите из предыдущего домашнего задания
const numberOfFilms = prompt('How many films did you see?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let filmName; 
let filmRate;

let i = 0;

// do {
//     filmName = prompt("Last film, what you've seen?", '');
//     console.log(filmName);
//     while (filmName == null || filmName == '' || filmName.length > 50) {
//         console.log('Try ones more!');
//         filmName = prompt("Last film, what you've seen?", '');
//         continue;
//     }
//     filmRate = +prompt(`How you can rate film ${filmName}? `, '');
//     personalMovieDB.movies[filmName]= filmRate;
//     i++;
// } while (i < 2);


if (personalMovieDB.count < 10) {
    alert('Not so many films have you seen!');
} else if (personalMovieDB.count <= 30) {
    alert('You are classical TV viewer!');
} else if (personalMovieDB.count > 30) {
    alert('You are kinofan!');
} else {
    alert('Something goes wrong :(');
}


writeYourGenres(personalMovieDB);

const showMyDB = (db) => {
    if (!db.privat) {
        console.log(db);
    }
};

showMyDB(personalMovieDB);