// Description: Surface Area and Volume of a Box.

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

// GEOMETRYFUNDAMENTALS

// My Solution =>

getSize = (width, height, depth) => [2 * (width * height + width * depth + height * depth), width * height * depth]