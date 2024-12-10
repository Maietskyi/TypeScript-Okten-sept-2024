//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//     Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї
//     falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).


// 2 Варіант
let w: unknown = '';
if (w === 0 || w === null || w === undefined || w === '') {
    w = "default";
}
console.log(w);


// 2 Варіант
let q: any = 0;
if (!q) {
    q = "default";
}
console.log(q);
