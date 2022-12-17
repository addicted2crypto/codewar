// Description: Creating a promise.

// Your Goal: Return a Resolved Promise
// Within the timer function, return a new resolved promise.

//  There is no need to do anything inside the executor function other than invoke the resolve function.

//  My solution =>

function timer() {
    return new Promise((resolve, reject) => {
    resolve();
    });
}

module.exports = timer;