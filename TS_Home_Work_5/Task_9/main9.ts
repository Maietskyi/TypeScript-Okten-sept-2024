// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

interface IArray {
    id: string,
    name: string,
    age: number
}

const dataOutput1 = (array: IArray[]): void => {
    for (const user of array) {
        document.write(`<div>
                 <p>id: ${user.id}</p> 
                 <p>name: ${user.name}</p> 
                 <p>age: ${user.age}</p>
                        </div>`);
    }
}
dataOutput1([
    {id: 'maietskyi', name: 'Mykhailo', age: 26},
    {id: 'vika', name: 'Viktoria', age: 20},
    {id: 'roma', name: 'Roman', age: 22}
])

//  Класом

class arrayClass {
    public id: string;
    public name: string;
    public age: number

    constructor(id: string, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age
    }
}

const dataOutput2 = (array: arrayClass[]): void => {
    for (const user of array) {
        document.write(`<div>
                 <p>id: ${user.id}</p> 
                 <p>name: ${user.name}</p> 
                 <p>age: ${user.age}</p>
                        </div>`);
    }
}
dataOutput2([
    {id: 'maietskyi', name: 'Mykhailo', age: 26},
    {id: 'vika', name: 'Viktoria', age: 20},
    {id: 'roma', name: 'Roman', age: 22}
])

