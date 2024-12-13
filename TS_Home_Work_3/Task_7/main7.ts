// #4WrHwFTEop0
// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років
interface Iusers {
    name: string;
    age: number;
    status: boolean
}

let users: Iusers[] = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

//     - користувачів зі статусом true
for (const user of users) {
    if (user.status === true) {
        console.log(`status === true`)
        console.log(user)
    }
}

//      - користувачів зі статусом false
for (const user of users) {
    if (user.status === false) {
        console.log(`status === false`)
        console.log(user)
    }
}

//      - користувачів які старші за 30 років
for (const user of users) {
    if (user.age > 30) {
        console.log(`age > 30`)
        console.log(user)
    }
}


// Також можна зробити за допомогою класу
class UserClass2 {
    public name: string;
    public age: number;
    public status: boolean

    constructor(name: string, age: number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status
    }
}

let users2: UserClass2[] = [
    new UserClass2('vasya', 31, false),
    new UserClass2('petya', 30, true),
    new UserClass2('kolya', 29, true),
    new UserClass2('olya', 28, false),
    new UserClass2('max', 30, true),
    new UserClass2('anya', 31, false),
    new UserClass2('oleg', 28, false),
    new UserClass2('andrey', 29, true),
    new UserClass2('masha', 30, true),
    new UserClass2('olya', 31, false),
    new UserClass2('max', 31, true)
];

//     - користувачів зі статусом true
for (const user of users2) {
    if (user.status === true) {
        console.log(`status === true`)
        console.log(user)
    }
}

//      - користувачів зі статусом false
for (const user of users) {
    if (user.status === false) {
        console.log(`status === false`)
        console.log(user)
    }
}

//      - користувачів які старші за 30 років
for (const user of users2) {
    if (user.age > 30) {
        console.log(`age > 30`)
        console.log(user)
    }
}