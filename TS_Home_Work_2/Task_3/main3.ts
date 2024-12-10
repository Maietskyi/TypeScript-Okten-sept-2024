//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" -
// являється  масивом. Кожен автор має поля name та age.

interface Autors {
    name: string,
    age: number
}

interface Books {
    title: string,
    pageCount: number,
    genre: string,
    authors: Autors[]
}

let book_1: Books = {
    title: "Richard the Lionheart",
    pageCount: 532,
    genre: "novel",
    authors: [{
        name: 'Richard',
        age: 51
    }]
};

let book_2: Books = {
    title: "The psychology of falling",
    pageCount: 345,
    genre: "psychology",
    authors: [{
        name: 'Robert',
        age: 63
    }]
};

let book_3: Books = {
    title: "History of Ukraine",
    pageCount: 448,
    genre: "historical",
    authors: [{
        name: 'Mykhailo',
        age: 74
    }]
};

console.log(book_1);
console.log(book_2);
console.log(book_3);