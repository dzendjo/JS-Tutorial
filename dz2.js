/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

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

do {
    filmName = prompt("Last film, what you've seen?", '');
    console.log(filmName);
    while (filmName == null || filmName == '' || filmName.length > 50) {
        console.log('Try ones more!');
        filmName = prompt("Last film, what you've seen?", '');
        continue;
    }
    filmRate = +prompt(`How you can rate film ${filmName}? `, '');
    personalMovieDB.movies[filmName]= filmRate;
    i++;
} while (i < 2);


if (personalMovieDB.count < 10) {
    alert('Not so many films have you seen!');
} else if (personalMovieDB.count <= 30) {
    alert('You are classical TV viewer!');
} else if (personalMovieDB.count > 30) {
    alert('You are kinofan!');
} else {
    alert('Something goes wrong :(');
}


console.log(personalMovieDB);