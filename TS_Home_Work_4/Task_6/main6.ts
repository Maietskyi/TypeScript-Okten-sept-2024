// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його
// через document.write. Текст li задати через аргумент всім однаковий

function displayText1(textLi: string): void {
    document.write(`<ul>
        <li>${textLi}</li>
        <li>${textLi}</li>
        <li>${textLi}</li>
    </ul>`);
}

displayText1('Okten school');