'use strict'

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
let personaMovieDB = {
    count  : numberOfFilms,
    moves  : {},
    actors : {},
    genres : [],
    privat : false
};
const a = prompt("Один из последних фильмов, которые вы посмотрели?", ''),
      b = prompt('На сколько оцените фильм?', ''),
      c = prompt("Один из последних фильмов, которые вы посмотрели?", ''),
      d = prompt('На сколько оцените фильм?', '');

personaMovieDB.moves[a] = b;
personaMovieDB.moves[c] = d;
console.log(personaMovieDB);