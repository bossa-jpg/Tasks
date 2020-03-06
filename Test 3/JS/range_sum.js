const range = (start, end, step = 1) => { //Составляет массив заданного диапазона чисел.
    let arr = []; //Step - учитывает шаг увеличения значений.

    if (step > 0) {
        for (let i = start; i <= end; i += step) { //Для положительного шага.
            arr.push(i);
        }
        return arr;
    } else {
        for (let i = start; i >= end; i += step) { //Для отрицательного шага.
            arr.push(i);
        }
        return arr;
    }
}
const sum = (arr) => { //Считает сумму чисел в переданном массиве.
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }
    return result
}
console.log(sum(range(10, 1, -2)))