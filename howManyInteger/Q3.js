function arraySum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            sum++;
        }
        if (Array.isArray(arr[i])) {
            sum += arraySum(arr[i]);
        }
    }
    return sum;
}
let testArray = [[[5], 3], 0, 2, ['foo'], [], [4, [5.1, 6]]]


console.log(arraySum(testArray));
