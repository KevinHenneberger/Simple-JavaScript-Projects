function setup() {
    frameRate(3);
    createCanvas(400, 400);
}

var world = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];

function simulation() {

    var death = [];
    var birth = [];

    for (var i = 0; i < world.length; i++) {
        for (var j = 0; j < world[0].length; j++) {

            if (world[i][j] == 1) {
                fill(175);
            } else {
                fill(255);
            }

            var s = (width / world.length);
            rect(j * s, i * s, s, s);

            var n = 0; // # of neighbors.

            // Above/Left.
            if (i > 1 && j > 1 && world[i - 1][j - 1] == 1) n++;
            // Above/Center.
            if (i > 1 && world[i - 1][j] == 1) n++;
            // Above/Right.
            if (i > 1 && j < world[0].length - 1 && world[i - 1][j + 1] == 1) n++;
            // Even/Left.
            if (j > 1 && world[i][j - 1] == 1) n++;
            // Even/Right.
            if (j < world[0].length - 1 && world[i][j + 1] == 1) n++;
            // Below/Left.
            if (i < world.length - 1 && j > 1 && world[i + 1][j - 1] == 1) n++;
            // Below/Center.
            if (i < world.length - 1 && world[i + 1][j] == 1) n++;
            // Below/Right.
            if (i < world.length - 1 && j < world[0].length - 1 && world[i + 1][j + 1] == 1) n++;

            // If cell is populated...
            if (world[i][j] == 1) {
                // Each cell with one or no neighbors dies.
                if (n <= 1) {
                    death.push([i, j]);
                }
                // Each cell with four or more neighbors dies.
                if (n >= 4) {
                    death.push([i, j]);
                }
                // Each cell with two or three neighbors survives.
            }
            // If cell is unpopulated...
            if (world[i][j] === 0) {
                // Each cell with three neighbors becomes populated.
                if (n == 3) {
                    birth.push([i, j]);
                }
            }
        }
    }

    for (var a = 0; a < death.length; a++) {
        world[death[a][0]][death[a][1]] = 0; // kill
    }

    for (var b = 0; b < birth.length; b++) {
        world[birth[b][0]][birth[b][1]] = 1; // populate
    }
}

function draw() {
    simulation();
}
