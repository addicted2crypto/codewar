// Description: Find the capitals. 

// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// My Solution =>

var capitals = function (word) {
	let y = word.split('');
  let x = [];
  for(let i = 0; i < y.length; i++){
    if(y[i] == y[i].toUpperCase()){
      x.push(i);
    }
    
  }
  return x;
};
