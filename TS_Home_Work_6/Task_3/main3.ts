// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let string10: string = 'HELLO WORLD';
let string21: string = 'LOREM IPSUM';
let string31: string = 'JAVASCRIPT IS COOL';
console.log(string10.toLowerCase());
console.log(string21.toLowerCase());
console.log(string31.toLowerCase());

// 2 варіант
let stringLoLowerCase = (arg: string): void => console.log(arg.toLowerCase());
stringLoLowerCase(string10);
stringLoLowerCase(string21);
stringLoLowerCase(string31);

// 3 варіант
const arrayStrings2: string[] = [string10, string21, string31]
for (const string of arrayStrings2) {
    console.log(string.toLowerCase())
}

// 4 варіант з функцією - не впевнений що така конструкція вірна
const stringsArray2: string[] = ['hello world', 'lorem ipsum', 'javascript is cool'];
let stringLength2 = (strings: string[]): void => {
    for (const str of strings) {
        console.log(str.toLowerCase())
    }
}

stringLength2(stringsArray2);