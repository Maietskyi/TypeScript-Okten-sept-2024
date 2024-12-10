//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//         За допомоги іф перевірити кожен його елемент на тривалість навчання.
//         У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

class coursesArrayClass {
    title: string;
    monthDuration: number
}

let coursesAndDurationArray: Array<coursesArrayClass> = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let curse1: number = coursesAndDurationArray[0].monthDuration;
if (curse1 > 5) {
    console.log('Супер')
}
let curse2: number = coursesAndDurationArray[1].monthDuration;
if (curse2 > 5) {
    console.log('Супер')
}
let curse3: number = coursesAndDurationArray[2].monthDuration;
if (curse3 > 5) {
    console.log('Супер')
}
let curse4: number = coursesAndDurationArray[3].monthDuration;
if (curse4 > 5) {
    console.log('Супер')
}
let curse5: number = coursesAndDurationArray[4].monthDuration;
if (curse5 > 5) {
    console.log('Супер')
}
let curse6: number = coursesAndDurationArray[5].monthDuration;
if (curse6 > 5) {
    console.log('Супер')
}