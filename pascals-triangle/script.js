function pascalsTriangle(numberOfRows) {

    // store Pascal's Triangle in a 2D array.
    var pascalsTriangle = [
        [1]
    ];

    // fill in Pascal's Triangle with values.
    while (pascalsTriangle.length < numberOfRows) {
        
        // create a new row, start each row with a 1. 
        pascalsTriangle.push([1]);
        
        // find the sum of the middle columns.
        var currentRowIndex = pascalsTriangle.length - 1;
        var previousRowIndex = pascalsTriangle.length - 2;
        var previousRowLength = pascalsTriangle[previousRowIndex].length - 1;
        
        // for each column in the previous row...
        for (var currentColumn = 0; currentColumn < previousRowLength; currentColumn++) {
            var nextColumn = currentColumn + 1;
            // add the current column and the next column, push the result into the current row. 
            pascalsTriangle[currentRowIndex].push(pascalsTriangle[previousRowIndex][currentColumn] + pascalsTriangle[previousRowIndex][nextColumn]);
        }
        
        // end each row with a 1.
        pascalsTriangle[currentRowIndex].push(1);
    }

    return pascalsTriangle;
}

// display Pascal's Triangle.
// loop through each row of Pascal's Triangle.
var numberOfRows = 10;

for (var r = 0; r < pascalsTriangle(numberOfRows).length; r++) {
    console.log(pascalsTriangle(numberOfRows)[r].join(' '));
}
