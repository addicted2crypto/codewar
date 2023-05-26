// Desctiption: Formatting decimal places # 0 

// Instructions
// Output
// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

// Example:    
// 5.5589 is rounded 5.56   
// 3.3424 is rounded 3.34
// FUNDAMENTALS

// My Solution => refactored on 5/26/2023 also

function twoDecimalPlaces(n) {
    return Number(parseFloat(n).toFixed(2));                                                                                                                                                                                                                                             
}

refactored =>
twoDecimalPlaces = (n) => Number(parseFloat(n).toFixed(2));
