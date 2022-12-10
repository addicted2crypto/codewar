// Desctiption: Sorting the events.
// our Goal: Sort the Events
// Given the array of events, sort them by the month that they occur in and return the sorted array.

// Each object in the events array will have properties event and month just like in the example shown above.

//  To find which events comes first, you'll need to see where it belongs in the MONTHS array. You can use the array indexOf method to find where it belongs.

//  My Solution =>

function sortStudents(students) {
    students.sort((x, y) => {
        if(x.graduated && !y.graduated){
            return -1;
        }else if(y.graduated && !x.graduated){
            return 1;
        }
        return y.grade - x.grade;
    })
}

module.exports = sortStudents;