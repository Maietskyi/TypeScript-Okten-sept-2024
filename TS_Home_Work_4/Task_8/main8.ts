// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write

function displayText(array :(string | boolean | number)[]): void{
    document.write('<ul>');
        for (const item of array){
            document.write(`<li>${item}</li>`);
        }
    document.write('</ul>');
}

displayText(['Okten school', 'Maietskyi', true, 55876]);