//     #bfoJuse4ZzP
// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// 1 варіант
let strin: string = 'Ревуть воли як ясла повні';
let stringToArray = (strin: string): void => {
    const splitToArray: string[] = strin.split(' ');
    console.log(splitToArray);
};
stringToArray(strin);

// 2 варіант
function stringToArray1(strin: string): string[] {
    const splitToArray1: string[] = strin.split(' ');
    return splitToArray1;
}

console.log(stringToArray1('Ревуть воли як ясла повні'))
