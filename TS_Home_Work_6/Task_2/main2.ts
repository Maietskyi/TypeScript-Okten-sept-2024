// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let string11: string = 'hello world';
let string12: string = 'lorem ipsum';
let string13: string = 'javascript is cool';
console.log(string11.toUpperCase());
console.log(string12.toUpperCase());
console.log(string13.toUpperCase());

// 2 варіант
let stringToUpperCase = (arg: string): void => console.log(arg.toUpperCase());
stringToUpperCase(string11);
stringToUpperCase(string12);
stringToUpperCase(string13);

// 3 варіант
const arrayStrings1: string[] = [string11, string12, string13]
for (const string of arrayStrings1) {
    console.log(string.toUpperCase())
}

// 4 варіант з функцією - не впевнений що така конструкція вірна

const stringsArray1: string[] = ['hello world', 'lorem ipsum', 'javascript is cool'];
let stringLength1 = (strings: string[]): void => {
    for (const str of strings) {
        console.log(str.toUpperCase())
    }
}

stringLength1(stringsArray1);