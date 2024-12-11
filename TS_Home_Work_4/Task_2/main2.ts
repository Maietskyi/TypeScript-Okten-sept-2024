// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

// 1 варіант
function circleArea(circleRadius: number): number {
    const result: number = 3.14 * (circleRadius * circleRadius);
    console.log(result);
    return result;
}

circleArea(12);

// 2 варіант
function circleArea2(circleRadius: number): number {
    return Math.PI * (circleRadius * circleRadius);
}
console.log(circleArea2(12));
console.log(+circleArea2(12).toFixed(2));