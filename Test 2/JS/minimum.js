const minimum = (a, b) => {
    let result = 0;
    if (a > b) {
        result = b;
    } else {
        result = a;
    }
    return result;
}
console.log(minimum(19, 2))