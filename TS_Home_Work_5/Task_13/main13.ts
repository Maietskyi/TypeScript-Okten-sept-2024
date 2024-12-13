// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400

class currencyValuesClass {
    public currency: string;
    public value: number

    constructor(currency:string,value:number) {
        this.currency = currency;
        this.value = value
    }
}

const exchange2 = (sumUAH: number,currencyValues:currencyValuesClass[],exchangeCurrency: string) => {
    let nameCurrency;
    for (const name of currencyValues) {
        if (name.currency === exchangeCurrency) {
            nameCurrency = name;
        }
    }
    return +(sumUAH / nameCurrency.value).toFixed(2);
}

console.log(exchange2(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));
console.log(exchange2(20000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'EUR'));