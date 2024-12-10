//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте3  скрипт при a, що дорівнює 1, 0, -3

// При x = 1

let x: number = 1;

if (x !== 0) {
    console.log(`${x} не = 0 - 'Вірно'`);
} else {
    console.log(`${x} = 0 - 'Невірно'`);
}

// При x = 0

let a: number = 0;

if (a !== 0) {
    console.log(`${a} не = 0 - 'Вірно'`);
} else {
    console.log(`${a} = 0 - 'Невірно'`);
}

// При x = -3

let b: number = -3;

if (b !== 0) {
    console.log(`${b} не = 0 - 'Вірно'`);
} else {
    console.log(`${b} = 0 - 'Невірно'`);
}


// Функція

function c(x:number):void {

if(x !== 0){
    console.log('Вірно');
} else{
    console.log('Невірно');
}}

c(1);
c(0);
c(-3);