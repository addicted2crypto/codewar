// Description: Array reduce.

// Your Goal: Complete the function
// Applying what you've learned, complete the function sum by 
// adding together the accumulator and the currentValue.

// My solution =>

// numbers is an array full of numbers
// let's add all the numbers and return the sum
// i.e. [1,2,3,4,5] => 15
function sum(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    });
}
