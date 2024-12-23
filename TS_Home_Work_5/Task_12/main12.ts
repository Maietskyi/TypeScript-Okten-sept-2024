// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap2 = (arr: number[], index1: number, index2: number): number[] => {
    if (index1 >= 0 && index1 < arr.length && index2 >= 0 && index2 < arr.length) {
        let temp: number = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    return arr;
};

console.log(swap2([11, 22, 33, 44], 0, 1));
