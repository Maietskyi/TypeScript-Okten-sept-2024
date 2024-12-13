// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

interface ICurrencyValues {
    currency: string,
    value: number
}

function exchange(sumUAH: number, exchangeCurrency: string): number {
    let nameCurrency: ICurrencyValues;
    for (const name of currencyValues) {
        if (name.currency === exchangeCurrency) {
            nameCurrency = name;
        }
    }
    let result: number = sumUAH / nameCurrency.value;
    return +result.toFixed(2);
}

const currencyValues: ICurrencyValues[] = [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}]

console.log(exchange(10000, 'USD'));
console.log(exchange(20000, 'EUR'));