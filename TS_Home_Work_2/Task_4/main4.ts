//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. ' +
// 'Вивести в консоль пароль кожного користувача

class Users{
    name: string;
    username: string;
    password: number;
}

let userDegree: Users[] =[
    {
        name: 'Ania',
        username: 'Anna',
        password: 11111,
    }, {
        name: 'Vika',
        username: 'Viktoria',
        password: 22222,
    }, {
        name: 'Misha',
        username: 'Mykhailo',
        password: 33333,
    }, {
        name: 'Roma',
        username: 'Roman',
        password: 44444,
    }, {
        name: 'Vlad',
        username: 'Vladyslav',
        password: 55555,
    }, {
        name: 'Nastya',
        username: 'Anastasia',
        password: 66666,
    }, {
        name: 'Masha',
        username: 'Maria',
        password: 77777,
    }, {
        name: 'Dima',
        username: 'Dmytro',
        password: 88888,
    }, {
        name: 'Vova',
        username: 'Volodumur',
        password: 99999,
    }, {
        name: 'Andriy',
        username: 'Andriy',
        password: 10123,
    }
];

console.log(`Пароль користувача 1 - ${userDegree[0].password}`);
console.log(`Пароль користувача 2 - ${userDegree[1].password}`);
console.log(`Пароль користувача 3 - ${userDegree[2].password}`);
console.log(`Пароль користувача 4 - ${userDegree[3].password}`);
console.log(`Пароль користувача 5 - ${userDegree[4].password}`);
console.log(`Пароль користувача 6 - ${userDegree[5].password}`);
console.log(`Пароль користувача 7 - ${userDegree[6].password}`);
console.log(`Пароль користувача 8 - ${userDegree[7].password}`);
console.log(`Пароль користувача 9 - ${userDegree[8].password}`);
console.log(`Пароль користувача 10 - ${userDegree[9].password}`);