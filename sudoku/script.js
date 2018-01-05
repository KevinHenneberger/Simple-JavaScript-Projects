var sudoku = [
    [2,9,5,7,0,0,8,6,0],
    [0,3,1,8,6,5,0,2,0],
    [8,0,6,0,0,0,0,0,0],
    [0,0,7,0,5,0,0,0,6],
    [0,0,0,3,8,7,0,0,0],
    [5,0,0,0,1,6,7,0,0],
    [0,0,0,5,0,0,1,0,9],
    [0,2,0,6,0,0,3,5,0],
    [0,5,4,0,0,8,6,7,2]
];

function isUnassigned() {
    
    for (var r = 0; r < sudoku.length; r++) { 
        for (var c = 0; c < sudoku[0].length; c++) { 
            if (sudoku[r][c] == 0) {
                return [r, c];
            }
        }
    }

    return [-1, -1];
}

function isUsedInRow(i, r) {
    
    for (var c = 0; c < sudoku[r].length; c++) {
        if (i == sudoku[r][c]) {
            return true;
        }
    }
    
    return false;
}

function isUsedInColumn(i, c) {
    
    for (var r = 0; r < sudoku.length; r++) {
        if (i == sudoku[r][c]) {
            return true;
        }
    }
    
    return false;
}

function isUsedInBox(i, r, c) {
    
    var s = Math.sqrt(sudoku.length);
    
    for (var cr = Math.floor(r / s) * s; cr < Math.floor(r / s) * s + s; cr++) {
        for (var cc = Math.floor(c / s) * s; cc < Math.floor(c / s) * s + s; cc++) {
            if (i == sudoku[cr][cc]) {
                return true;
            }
        }
    }
    
    return false;
}

function isPossibleSolution(i, r, c) {
    
    return !isUsedInRow(i, r) && !isUsedInColumn(i, c) && !isUsedInBox(i, r, c);
}

function solveSudoku() {
    
    var r = isUnassigned()[0];
    var c = isUnassigned()[1];

    if (r == -1 && c == -1) {
        return true;
    }

    for (var i = 1; i <= sudoku.length; i++) {

        if (isPossibleSolution(i, r, c)) {   
            sudoku[r][c] = i;

            if (solveSudoku()) {                
                return true;
            }
 
            sudoku[r][c] = 0;
        }
    }

    return false;
}

solveSudoku();

for (var i = 0; i < sudoku.length; i++) {
    console.log(sudoku[i].join(''));
}
