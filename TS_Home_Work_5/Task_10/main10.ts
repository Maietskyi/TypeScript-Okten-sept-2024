//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

// Перший варіант
const minNumber3 = (array: number[]): void => console.log(Math.min(...array));

minNumber3([2, 5, 8, 2, 4, 3, 1, 5]);

// Другий варіант
const minNumber4 = (arrays: number[]): number => {
    let min: number = arrays[0];
    for (const number of arrays) {
        if (number < min) {
            min = number
        }
    }
    return min;
}

console.log(minNumber4([6, 3, 5, 8, 9, 4, 3, 3, 5]));
