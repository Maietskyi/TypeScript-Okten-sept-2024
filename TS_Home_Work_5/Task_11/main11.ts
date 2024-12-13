// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum2 = (arr:number[]):number => {
    let result:number = 0;
   for (const number of arr){
       result += number;
   }
    return result;
}

console.log(sum2([1,2,10]));
console.log(sum2([8,3,1,2,10]));