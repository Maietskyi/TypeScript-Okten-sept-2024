// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// Площа бічної сторони = 2пRH
let lateralArea2 = (radius:number,height:number):number => +(2*Math.PI*radius*height).toFixed(2);

//Площа основи = π(R*R)
let circleArea5 = (radius:number):number => +(Math.PI*(radius*radius)).toFixed(2);

// Повна площа циліндра = Площа бічної сторони + 2 * Площа основи
// тобто площа циліндра = 2пRH + 2*π(R*R)
let cylinderArea2 = (radius:number,height:number):number => lateralArea2(radius,height) + 2 * circleArea5(radius);

console.log(cylinderArea2(12,5));
