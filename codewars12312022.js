// Description: Is it a palindrome?

// DESCRIPTION:
// Write a function that checks if a given string (case insensitive) is a palindrome.

// My solution=>


const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split('').reverse().join('');

