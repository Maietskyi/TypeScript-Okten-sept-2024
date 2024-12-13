// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// 1 варіант
let circleArea3 = (circleRadius:number):number => 3.14 * (circleRadius * circleRadius);

console.log(circleArea3(12));

// 2 варіант
let circleArea4: (circleRadius: number) => void = (circleRadius: number): void => console.log(+(Math.PI * (circleRadius * circleRadius)).toFixed(2));

circleArea4(15);