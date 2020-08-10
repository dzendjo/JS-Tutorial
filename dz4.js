/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    toggleVisibleMyDB: function() {
        this.privat = !this.privat;
    },

    showMyDB: function() {
        if (!this.privat) {
            let properties = [];
            let key;
            for (key in this) {
                if (typeof(this[key]) != 'function') {
                    properties.push(`${key}: ${this[key]}`);
                }
            }
            console.log(properties.join('; '));
        } else {
            console.log('This is privat DB!');
        }
    },
    
    writeYourGenres: function() {
        let i = 1;
        do {
            const genre = prompt(`Your favorite genre with number #${i}`);
            if (genre == null || genre == '') {
                console.log('Not correct genre :(');
            } else {
                this.genres.push(genre);
                i++;
            }
        } while (this.genres.length < 3);
        this.genres.forEach(function(value, index) {
           console.log(`Любимый жанр #${index+1} - это ${value}`); 
        });
    }
};


const db = Object.create(personalMovieDB);
db.showMyDB();
db.writeYourGenres();
db.showMyDB();
db.toggleVisibleMyDB();
db.showMyDB();