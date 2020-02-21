const countChar = (string, letter) => {
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] === letter){
            count++
        }
    }
    return count;
}
let string = 'Бесплатный сервис Google позволяет мгновенно переводить слова, фразы и веб-страницы с английского на более чем 100 языков и обратно.'
console.log(countChar(string, 'е'))