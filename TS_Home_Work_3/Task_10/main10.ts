// #qLQLJSeN7i
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
//     2. перебрати його циклом for
//     3. перебрати циклом while та вивести числа тільки з непарним індексом
// 4. перебрати циклом for та вивести числа тільки з непарним індексом
// 5. перебрати циклом while та вивести числа тільки парні значення
// 6. перебрати циклом for та вивести числа тільки парні значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив у зворотному порядку.
// 9. всі попередні завдання (окрім 8), але у зворотному циклі (с заду на перед)

let arrays: number[] = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
let m: number = 0;
while (m < arrays.length) {
    console.log(m);
    m++;
}

// 2. перебрати його циклом for
for (let a: number = 0; a < arrays.length; a++) {
    console.log(arrays[a]);
}

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let bbb: number = 0;
while (bbb < arrays.length) {
    if (bbb % 2 !== 0) {
        console.log(arrays[bbb]);
    }
    bbb++;
}

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let r: number = 0; r < arrays.length; r++) {
    if (r % 2 !== 0) {
        console.log(arrays[r]);
    }
}

// 5. перебрати циклом while та вивести числа тільки парні значення
let t: number = 0;
while (t < arrays.length) {
    if (arrays[t] % 2 === 0) {
        console.log(arrays[t]);
    }
    t++;
}

// 6. перебрати циклом for та вивести числа тільки парні значення
for (let y: number = 0; y < arrays.length; y++) {
    if (arrays[y] % 2 === 0) {
        console.log(arrays[y]);
    }
}

// 8. вивести масив в зворотньому порядку.
for (let p: number = arrays.length - 1; p >= 0; p--) {
    console.log(arrays[p]);
}

// 9. перебрати його циклом while в зворотному циклі
let ii: number = arrays.length;
while (ii > 0) {
    console.log(ii);
    ii--;
}

// 10. перебрати його циклом for в зворотному циклі
for (let aa: number = arrays.length; aa > 0; aa--) {
    console.log(aa);
}

// 11. перебрати циклом while та вивести числа тільки з непарним індексом у зворотному циклі
let bb: number = arrays.length;
while (bb > 0) {
    if (bb % 2 !== 0) {
        console.log(arrays[bb]);
    }
    bb--;
}

// 12. перебрати циклом for та вивести числа тільки з непарним індексом у зворотному циклі
for (let rr: number = arrays.length; rr > 0; rr--) {
    if (rr % 2 !== 0) {
        console.log(arrays[rr]);
    }
}

// 13. перебрати циклом while та вивести числа тільки парні значення у зворотному циклі
let tt: number = arrays.length;
while (tt > 0) {
    if (arrays[tt] % 2 === 0) {
        console.log(arrays[tt]);
    }
    tt--;
}

// 14. перебрати циклом for та вивести числа тільки парні значення у зворотному циклі
for (let y: number = arrays.length; y > 0; y--) {
    if (arrays[y] % 2 === 0) {
        console.log(arrays[y]);
    }
}


// Цих 2 завдання трішки перероблю тип масиву))

let arrayAny: any[] = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 7. замінити кожне число кратне 3 на слово "okten"
for (let pp: number = 0; pp < arrayAny.length; pp++) {
    let text: string = 'okten';
    if (pp % 3 === 0) {
        arrayAny[pp] = text;
    }
}
console.log(arrayAny);

// 15. замінити кожне число кратне 3 на слово "okten" у зворотному циклі
for (let o: number = arrayAny.length; o > 0; o--) {
    let text: string = 'okten';
    if (o % 3 === 0) {
        arrayAny[o] = text;
    }
}
console.log(arrayAny);

