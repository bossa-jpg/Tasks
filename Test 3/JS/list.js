const arrayToList = arr => {
    let list = {
        value: arr[arr.length - 1],
        rest: null
    };
    for (let i = arr.length - 2; i >= 0; i--) {
        list = {
            value: arr[i],
            rest: list
        }

    }
    return list
}
const listToArray = obj => {
    let listArray = [];
    for(let node = obj; node; node = node.rest){ //На каждой итерации открывает новый подсписок.
        listArray.push(node.value) //Когда list = null, цикл заканчивается.
    }
    return listArray
}
const prepend = (val, list) => {
    let newList = {
        value: val,
        rest: list
    }
}
console.log(prepend(4, arrayToList([1, 2, 3])))
console.log(listToArray(arrayToList([1, 2, 3])))
