// #6Qb97gsv
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в
// одну змінну person (Не об'єкт, просто за допомоги конкатенації)

const firstName: string = 'Михайло';
const middleName: string = 'Михайлович';
const lastName: string = 'Маєцький';

const person: string = `${firstName} ${middleName} ${lastName}`;

console.log(person);