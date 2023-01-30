"use strict";
const book = {
    id: 1,
    tittle: 'Mi Libro',
    author: 'Brandon'
};
const books = [];
function getBook() {
    return { id: 1, tittle: 'Mi titulo', author: 'Yo' };
}
const myBook = getBook();
function createBook(book) {
    return book;
}
const newBook = {
    id: 1,
    tittle: 'My Tittle',
    author: 'Brandon',
    coAuthor: 'Domini Code'
};
createBook(newBook);
