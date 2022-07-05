"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Последний просмотренный вами фильм?", ""),
    b = prompt("На сколько вы оцените его?", ""),
    c = prompt("Последний просмотренный вами фильм?", ""),
    d = prompt("На сколько вы оцените его?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);