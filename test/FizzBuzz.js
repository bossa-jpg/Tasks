 
let num = 1;
for (num; num < 100; num++) {                   //Выводит числа от 1 до 100.
    if (num % 3 === 0 && num % 5 === 0) {
        console.log('FizzBuzz')                 //На числах, кратных и 3 и 5 выводит "FizzBuzz"
    } else if (num % 3 === 0) {
        console.log('Fizz')                     //На числах, кратных 3 выводит "Fizz".
    } else if (num % 5 === 0) {
        console.log('Buzz')                     //На числах, кратных 5 выводит "Buzz".
    } else {
        console.log(num)
    }
}