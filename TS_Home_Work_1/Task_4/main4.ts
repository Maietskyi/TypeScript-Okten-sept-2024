// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими
// Імям, По-Батькові та роками. та вивести в консоль

let firstNamePrompt: string = prompt('Як Вас звати?');
let middleNamePrompt: string = prompt('Як Вас по батькові?');
let agePrompt: number = +prompt('Скільки Вам років?');

console.log(`${firstNamePrompt} ${middleNamePrompt} ${agePrompt} років`);