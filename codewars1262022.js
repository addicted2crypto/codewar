// Description:  Your Goal: Create a Flip Function
// Create a function flip on the rectangle prototype! This function will switch the height and width dimensions of the rectangle. It will take no arguments.

//  You may need to store a temporary variable in order to flip the dimensions!

//  My solution =>

 const Shape = require('./Shape');

function Rectangle(x, y, height, width) {
    Shape.call(this, x, y);
    this.height = height;
    this.width = width;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.flip = function() {
    let width = this.width;
    this.width = this.height;
    this.height = width;
}

module.exports = Rectangle;