//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
const suits1: string[] = ['spade', 'diamond', 'heart', 'club'];
const values1: string[] = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

interface ICards1 {
    suit: string;
    value: string;
    color?: string
}

const cards1: ICards1[] = [];
for (const suit of suits1) {
    for (const value of values1) {
        const card: ICards1 = {suit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards1.push(card);
    }
}
console.log(cards1);

interface IResultSorting {
    spades: ICards1[],
    diamonds: ICards1[],
    hearts: ICards1[],
    clubs: ICards1[]
}

const resultSorting: IResultSorting = cards1.reduce((previousValue: IResultSorting, card: ICards1): IResultSorting => {
    switch (card.suit) {
        case 'spade':
            previousValue.spades.push(card);
            break;
        case 'diamond':
            previousValue.diamonds.push(card);
            break;
        case 'heart':
            previousValue.hearts.push(card);
            break;
        case 'club':
            previousValue.clubs.push(card);
            break;
    }
    return previousValue;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log(resultSorting);


// Коли я роблю так як Сергій розв'язує це дз, мені не виводить в консоль

// cards.reduce((previousValue, card) => {
//     switch (card.cardSuit) {
//         case 'spade':
//             previousValue.spades.push(card);
//             break;
//         case 'diamond':
//             previousValue.diamonds.push(card);
//             break;
//         case 'heart':
//             previousValue.hearts.push(card);
//             break;
//         case 'club':
//             previousValue.clubs.push(card);
//             break;
//     }
//     return previousValue;
// }, {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// });
//
// console.log(reduce);

// я спробував зробити ось так і наче працює
// Але не можу зрозуміти чому не працює так як в Сергія