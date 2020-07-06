'use strict'

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
};

start();

let personaMovieDB = {
    count: numberOfFilms,
    moves: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Один из последних фильмов, которые вы посмотрели?", ''),
            b = prompt('На сколько оцените фильм?', '');
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personaMovieDB.moves[a] = b;
            console.log('Done!');
        } else {
            console.log('Error');
            i--;
        }
    }
}
// rememberMyFilms();

function detectPersonalLevel() {
    if (personaMovieDB.count < 10) {
        console.log('Вы смотрите очень мало фильмов');
    } else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
        console.log('Нелохой результат по просмотрам, так держать!');
    } else if (personaMovieDB.count >= 30) {
        console.log('Да вы прожженный кинолюбитель! Wow!');
    } else console.log('Что-то пошло не так')
};

// detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden){
        console.log(personaMovieDB);
    }
};
showMyDB(personaMovieDB.privat);

function writeYourGanres(){
    for(let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personaMovieDB.genres[i - 1] = genre;
    }
}
writeYourGanres();