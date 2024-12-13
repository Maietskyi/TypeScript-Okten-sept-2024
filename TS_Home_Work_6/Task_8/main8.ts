// #yo06d74c1C
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

class CourseClass {
    public title: string;
    public monthDuration: number
    public id?: number

    constructor(title: string , monthDuration: number, id?: number) {
        this.title = title;
        this.monthDuration = monthDuration;
        this.id = id
    }

}

let coursesAndDurationArray1: CourseClass [] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


const resoult: CourseClass[] = coursesAndDurationArray1
    .sort((a: CourseClass, b: CourseClass):number => b.monthDuration - a.monthDuration)
    .filter((value: CourseClass): boolean => value.monthDuration > 5)
    .map((value: CourseClass, index: number): CourseClass => {
        value.id = index + 1;
        return value;
    });

console.log(resoult);
