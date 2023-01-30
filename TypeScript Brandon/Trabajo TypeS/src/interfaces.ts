            //Interfaces
interface Book {
    id: number;
    tittle: string;
    author: string;
    coAuthor?: string; 
    isLoan?: (id: number) => void
}

const book: Book = {
    id: 1,
    tittle: 'Mi Libro',
    author: 'Brandon'
};

const books: Book[] = [];

function getBook(): Book{
    return {id: 1, tittle: 'Mi titulo', author: 'Yo'};
}

const myBook = getBook();

function createBook(book: Book): Book{
    return book;
}

const newBook: Book = {
    id: 1,
    tittle: 'My Tittle',
    author: 'Brandon',
    coAuthor: 'Domini Code'
}

createBook(newBook);