const reverseArray = arr => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i])
    }
    return newArr
}
console.log(reverseArray([2, 6, 13, 0, 88]))

const reverseArrayInPlace = arr1 => {
    for (let i = 0; i < Math.floor(arr1.length / 2); i++) {
        let val = arr1[i];
        let val1 = arr1[arr1.length - 1 - i];
        arr1.splice(i, 1, val1);
        arr1.splice(arr1.length - 1 - i, 1, val);
    }
    return arr1
}
console.log(reverseArrayInPlace([2, 6, 13, 0, 88]))