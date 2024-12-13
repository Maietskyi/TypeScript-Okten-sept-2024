// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr: number[]): number {
    let result: number = 0;
    for (const number of arr) {
        result = result + number;
    }
    return result;
}

console.log(sum([1, 2, 10]));
console.log(sum([8, 3, 1, 2, 10]));