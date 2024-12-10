// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
interface Books {
    title: string,
    pageCount: number,
    genre: string
}

let book1: Books = {
    title: "Richard the Lionheart",
    pageCount: 532,
    genre: "novel"
};

let book2: Books = {
    title: "The psychology of falling",
    pageCount: 345,
    genre: "psychology"
};

let book3: Books = {
    title: "History of Ukraine",
    pageCount: 448,
    genre: "historical"
};
console.log(book1, book2, book3);
console.log(book2.title);