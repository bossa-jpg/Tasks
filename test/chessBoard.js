let board = ' ';
let width = 8;
let height = 8;
for(let stringCount = 0; stringCount < height; stringCount++){
    for(let symbolCount = 0; symbolCount < (width); symbolCount++){
    if(symbolCount % 2){
        board += '#'
    }else {
        board += ' '
    }
}
if(stringCount % 2){
    board += '\n '
}else {
    board += '\n'
}
}
console.log(board)