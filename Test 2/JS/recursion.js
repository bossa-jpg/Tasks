const isEven = num => {
    let even = 0;
    let odd = 1;

    if (num === even) {
        return true
    } else if (num === odd) {
        return false
    } else if (num > 0) {
        return isEven(num - 2) //Уменьшает заданное положительное число до одного из двух вариантов - 0 или 1.
    } else {
        return isEven(num + 2) //Увеличивает отрицательное число до условных значений.
    }
}
console.log(isEven(-14))