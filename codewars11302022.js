Your Goal: Halve 'em! 
The function halfValue takes an array of numbers. It should return a new array with all the original values halved.

Odd numbers should be rounded up to the nearest whole number.

My solution =>

function halfValue(numbers) {
    let arr2 = [];
    for (let i = 0; i < numbers.length; i++){
        arr2[i] =Math.round(numbers[i] / 2);
    }
    return arr2;
}
