// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.

interface IUser {
    id: string,
    name: string,
    age: number
}

function dataOutput(array: IUser[]): void {
    for (const user of array) {
        document.write(`
             <div>
                <p>${user.id} ${user.name} ${user.age}</p>
             </div>
                    `);
    }
}

dataOutput([
    {
        id: 'maietskyi',
        name: 'Mykhailo',
        age: 26
    },
    {
        id: 'vika',
        name: 'Viktoria',
        age: 20
    }
])


// Класом

class userClass {
    id: string;
    name: string;
    age: number
}

function dataOutputs(arrays: userClass[]): void {
    for (const users of arrays) {
        document.write(`
             <div>
                <p>${users.id} ${users.name} ${users.age}</p>
             </div>
                    `);
    }
}

dataOutputs([
    {
        id: 'maietskyi',
        name: 'Mykhailo',
        age: 26
    },
    {
        id: 'vika',
        name: 'Viktoria',
        age: 20
    }
])

