Description: Count the number of cubes with paint on
132784% of 1,0162,166 of 5,816jackchambers4 Issues Reported
 JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Upon arriving at an interview, you are presented with a solid blue cube. The cube is then dipped in red paint, coating the entire surface of the cube. The interviewer then proceeds to cut through the cube in all three dimensions a certain number of times.

Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

To make it clearer, the picture below represents the cube after (from left to right) 0, 1 and 2 cuts have been made.

countSquares =(cuts) =>  cuts === 0 ? 1 : 6 * cuts * cuts + 2;
//had to find forumla of 6n squared + 2!! n = cuts