// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
//     відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let days: number = +prompt('Введіть порядковий номер дня тижня');
switch (days) {
    case 1:
        document.write('Monday');
        break;
    case 2:
        document.write('Tuesday');
        break;
    case 3:
        document.write('Wednesday');
        break;
    case 4:
        document.write('Thursday');
        break;
    case 5:
        document.write('Friday');
        break;
    case 6:
        document.write('Saturday');
        break;
    case 7:
        document.write('Sunday');
        break;
    default:
        document.write('Ти де бачив такий день в тижні?');
}