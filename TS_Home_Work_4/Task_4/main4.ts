// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

function arraySearch (array: (number | string | boolean)[]): void {
    for (const item of array){
        console.log(item);
    }
}

arraySearch ([1, 'Lesson', '584', true, "Task"])
