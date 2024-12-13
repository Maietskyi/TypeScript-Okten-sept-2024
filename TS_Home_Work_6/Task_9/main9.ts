//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

const suits: string[] = ['spade', 'diamond', 'heart', 'clubs'];
const values: string[] = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];

interface ICards {
    suit: string;
    value: string;
    color?: string
}

const cards: ICards[] = [];
for (const suit of suits) {
    for (const value of values) {
        let card: ICards = {suit: suit, value: value};
        if (suit === 'heart' || suit === 'diamond') {
            card.color = 'red';
        } else {
            card.color = 'black';
        }
        cards.push(card);
    }
}
console.log(cards);

// - знайти піковий туз
console.log(cards.filter((card: ICards):boolean => card.value === 'ace' && card.suit === 'spade'));
// - всі шістки
console.log(cards.filter((card: ICards): boolean => card.value === '6'));
// - всі червоні карти
console.log(cards.filter((card: ICards):boolean => card.color === 'red'));
// - всі буби
console.log(cards.filter((card: ICards): boolean => card.suit === 'diamond'));
// - всі трефи від 9 та більше
console.log(cards.filter((card: ICards): boolean => card.suit === 'clubs' &&
    card.value !== '6' && card.value !== '7' && card.value !== '8' && card.value !== '9'));

// // Також я пробував робити так як Сергій, але мені виводить всі cardSuit === 'clubs' без виключень
// console.log(cards.filter((card: ICards): boolean => card.suit === 'clubs' && (
//     card.value !== '6' || card.value !== '7' || card.value !== '8' || card.value !== '9')));