// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
//     Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде
// одновимірний масив з 21 значенням вичключаємо одразу

// 1 варіант

class temperature1{
    morning: number; day: number; evening: number
}

let temperature: temperature1[] =[
    {
        morning: -4, day: 8, evening: 3
    },{
        morning: -3, day: 7, evening: 2
    },{
        morning: -6, day: 8, evening: 0
    },{
        morning: -2, day: 12, evening: 2
    },{
        morning: 0, day: 14, evening: 0
    },{
        morning: 1, day: 9, evening: 3
    },{
        morning: 2, day: 15, evening: 3
    },
];

console.log(temperature);

// 2 варіант

let temperatures: number[][] =[
    [-4, 8, 3],
    [-3, 7, 2],
    [-6, 8, 0],
    [-2, 12, 2],
    [0, 14, 0],
    [1, 9, 3],
    [2, 15, 3]
];

console.log(temperatures);