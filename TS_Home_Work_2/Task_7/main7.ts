// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті
// години попадає число (в першу, другу, третю или четверту частину години).

let time:number = 15;

if (time <= 14) {
    console.log('Перша чверть')
}else if (time >= 15 && time <= 29) {
    console.log('Друга чверть')
}else if (time >= 30 && time <= 44) {
    console.log('Третя чверть')
}else if (time >= 45 && time <= 59) {
    console.log('Четверта чверть')
}else {
    console.log('?????')
}