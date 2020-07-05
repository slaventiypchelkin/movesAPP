'use strict'

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
let personaMovieDB = {
    count  : numberOfFilms,
    moves  : {},
    actors : {},
    genres : [],
    privat : false
};


for (let i = 0; i < 2; i++){
    const a = prompt("Один из последних фильмов, которые вы посмотрели?", ''),
          b = prompt('На сколько оцените фильм?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personaMovieDB.moves[a] = b;
        console.log('Done!');
    }else{
        console.log('Error');
        i--;
    }        
}
if (personaMovieDB.count < 10){
    console.log('Вы смотрите очень мало фильмов');
}else if(personaMovieDB.count >= 10 && personaMovieDB.count < 30){
    console.log('Нелохой результат по просмотрам, так держать!');
}else if(personaMovieDB.count >= 30){
    console.log('Да вы прожженный кинолюбитель! Wow!');
}else console.log('Что-то пошло не так')
console.log(personaMovieDB);