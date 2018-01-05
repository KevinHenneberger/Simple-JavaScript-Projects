var towerOfHanoi = [
    [5, 4, 3, 2, 1],
    [],
    []
];

var towerA = 0;
var towerB = 1;
var towerC = 2;

var numberOfDisks = towerOfHanoi[towerA].length;

function moveDisk(towerA, towerB) {
    towerOfHanoi[towerB].push(towerOfHanoi[towerA].pop());
}

function isValidMove(towerA, towerB) {
    
    var topDiskA = towerOfHanoi[towerA].length - 1;
    var topDiskB = towerOfHanoi[towerB].length - 1;
    
    return (towerOfHanoi[towerB].length == 0 || towerOfHanoi[towerA][topDiskA] < towerOfHanoi[towerB][topDiskB]);
}

function drawtowerOfHanoi() {

    rectMode(CENTER);
    
    for (var tower = 0; tower < towerOfHanoi.length; tower++) {
        
        fill(0);
        rect(tower * (width / 3) + (width / 6), 195, 5, 65);
        
        for (var disk = 0; disk < towerOfHanoi[tower].length; disk++) {  
            
            var diskWidth = towerOfHanoi[tower][disk] * 20;
            var diskHeight = 10;
            
            fill(230, 200, 150);
            rect(tower * (width / 3) + (width / 6), 225 - disk * diskHeight, diskWidth, diskHeight, 3);
        }
    }
}

function solveTowerOfHanoi() {

    if (frameCount >= 3) {
        
        if (numberOfDisks % 2 == 0) {
            
            if (towerOfHanoi[towerC].length != numberOfDisks) {
                
                if (frameCount % 3 == 0) {
                    if (isValidMove(towerA, towerB)) {
                        moveDisk(towerA, towerB);
                        console.log("A -> B");
                    } else {
                        moveDisk(towerB, towerA);
                        console.log("B -> A");
                    }
                }
                
                if (towerOfHanoi[towerC].length == numberOfDisks) {
                    noLoop();
                }
                
                if (frameCount % 3 == 1) {
                    if (isValidMove(towerA, towerC)) {
                        moveDisk(towerA, towerC);
                        console.log("A -> C");
                    } else {
                        moveDisk(towerC, towerA);
                        console.log("C -> A");
                    }
                }
                
                if (towerOfHanoi[towerC].length == numberOfDisks) {
                    noLoop();
                }
                
                if (frameCount % 3 == 2) {
                    if (isValidMove(towerB, towerC)) {
                        moveDisk(towerB, towerC);
                        console.log("B -> C");
                    } else {
                        moveDisk(towerC, towerB);
                        console.log("C -> B");
                    }
                }
                
                if (towerOfHanoi[towerC].length == numberOfDisks) {
                    noLoop();
                }
            }
            
        } else {
            
            if (towerOfHanoi[towerC].length != numberOfDisks) {
                
                if (frameCount % 3 == 0) {
                    if (isValidMove(towerA, towerC)) {
                        moveDisk(towerA, towerC);
                        console.log("A -> C");
                    } else {
                        moveDisk(towerC, towerA);
                        console.log("C -> A");
                    }
                }
                
                if (towerOfHanoi[towerC].length == numberOfDisks) {
                    noLoop();
                }
                
                if (frameCount % 3 == 1) {
                    if (isValidMove(towerA, towerB)) {
                        moveDisk(towerA, towerB);
                        console.log("A -> B");
                    } else {
                        moveDisk(towerB, towerA);
                        console.log("B -> A");
                    }
                }
                
                if (towerOfHanoi[towerC].length == numberOfDisks) {
                    noLoop();
                }
                
                if (frameCount % 3 == 2) {
                    if (isValidMove(towerC, towerB)) {
                        moveDisk(towerC, towerB);
                        console.log("C -> B");
                    } else {
                        moveDisk(towerB, towerC);
                        console.log("B -> C");
                    } 
                }
                
                if (towerOfHanoi[towerC].length == numberOfDisks) {
                    noLoop();
                }
            }
        }
    }
}

function setup() {
    createCanvas(400, 400);
    frameRate(3);
}

function draw() {

    background(255);
    solveTowerOfHanoi();
    drawtowerOfHanoi();
}
