//Выводит сетку в шахматном порядке по назначенным высоте и ширине.
let board = ' ';
let width = 8;
let height = 8;
let biba = '';
for (let stringCount = 0; stringCount < height; stringCount++) {
    for (let symbolCount = 0; symbolCount < (width); symbolCount++) {   
        if (symbolCount % 2) {          //Каждый второй символ - "#"
            board += '#'
        } else {
            board += ' '
        }
    }
    if (stringCount % 2) {
        board += '\n '          //Каждая вторая строка начинается с " ", чтобы получился шахматный порядок.
    } else {
        board += '\n'       
    }
}
console.log(board)