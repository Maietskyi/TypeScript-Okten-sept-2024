// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// 1 варіант
let str: string = ' dirty string   ';
console.log(str.trim());

// 2 варіант
let strTrim: string = str.trim();
console.log(strTrim);

// перевірка
console.log(str.length);
console.log(strTrim.length);