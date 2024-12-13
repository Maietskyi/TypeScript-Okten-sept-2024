// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за
// допомоги map  перетворити всі об'єкти в масиві на стрінгові.

const numberArray: number[] = [10,8,-7,55,987,-1011,0,1050,0];

let numberToString: string[] = numberArray.map((number: number): string => number + '');
console.log(numberToString);