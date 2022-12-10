// Desciption: Compare Strings.
// Your Goal: Sort Strings Ascending
// Given an array of strings, sort them in ascending order ('a','b','c'...) and return the sorted array.

//  For debugging purposes, the tests will log your actual results versus the expected test results.

//  My Solution=>

function sortStringsUp(array) {
    array.sort((x,y)=> {
     return x.localeCompare(y);
});
}

