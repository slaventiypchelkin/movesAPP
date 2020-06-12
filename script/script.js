'use strict'

let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
let personaMovieDB = {
    count  : numberOfFilms,
    moves  : {},
    actors : {},
    genres : [],
    privat : false
}