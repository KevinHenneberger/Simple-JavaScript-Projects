var input;
var button;

var WINDOW = {
    x: {min: -1, max: 2},
    y: {min: -2, max: 5}
};

function f(x) {
    return 1 + pow(x, 4) - 3 * sq(x); // f(x) = 1 + x^4 - 3x^2
}

function drawAxes() {
    
    strokeWeight(1);
    stroke(0);

    line(
        map(0, WINDOW.x.min, WINDOW.x.max, 0, width), 
        0, 
        map(0, WINDOW.x.min, WINDOW.x.max, 0, width), 
        height
    );
    line(
        0, 
        map(0, WINDOW.y.min, WINDOW.y.max, height, 0), 
        width, 
        map(0, WINDOW.y.min, WINDOW.y.max, height, 0)
    );
}

function graph(d) {
    
    drawAxes();
    
    var t = WINDOW.x.min;
    
    while (t <= WINDOW.x.max) {
            
        var x1 = t;
        var y1 = f(t);
        var x2 = t + d;
        var y2 = f(t + d);
        
        var px1 = map(x1, WINDOW.x.min, WINDOW.x.max, 0, width);
        var py1 = map(y1, WINDOW.y.min, WINDOW.y.max, height, 0);
        var px2 = map(x2, WINDOW.x.min, WINDOW.x.max, 0, width);
        var py2 = map(y2, WINDOW.y.min, WINDOW.y.max, height, 0);
        
        stroke(255, 0, 0);
        strokeWeight(1);
        line(px1, py1, px2, py2);
        
        t += d;
    }
}

var e = 1 / 1000000;

function displayRiemannSum(a, b, deltaX, approximation) {
    
    rectMode(CORNERS);
    
    stroke(150);
    fill(200, 200, 200, 50);
    
    if (approximation == "left") {
        for (var x = a; x + e < b; x += deltaX) {
            rect(
                floor(map(x, WINDOW.x.min, WINDOW.x.max, 0, width)), 
                floor(map(f(x), WINDOW.y.min, WINDOW.y.max, height, 0)), 
                floor(map(x + deltaX, WINDOW.x.min, WINDOW.x.max, 0, width)), 
                floor(map(0, WINDOW.y.min, WINDOW.y.max, height, 0))
            );
        }
    } else if (approximation == "right") {
        for (var x = a; x + e < b; x += deltaX) {
            rect(
                floor(map(x, WINDOW.x.min, WINDOW.x.max, 0, width)), 
                floor(map(0, WINDOW.y.min, WINDOW.y.max, height, 0)),
                floor(map(x + deltaX, WINDOW.x.min, WINDOW.x.max, 0, width)), 
                floor(map(f(x + deltaX), WINDOW.y.min, WINDOW.y.max, height, 0))
            );
        }
    } else if (approximation == "midpoint") {
        for (var x = a; x + e < b; x += deltaX) {
            rect(
                floor(map(x, WINDOW.x.min, WINDOW.x.max, 0, width)), 
                floor(map(0, WINDOW.y.min, WINDOW.y.max, height, 0)),
                floor(map(x + deltaX, WINDOW.x.min, WINDOW.x.max, 0, width)), 
                floor(map(f(x + (deltaX / 2)), WINDOW.y.min, WINDOW.y.max, height, 0))
            );
        }
    } else if (approximation == "trapezoid") {
        for (var x = a; x + e < b; x += deltaX) {
            quad(
                floor(map(x, WINDOW.x.min, WINDOW.x.max, 0, width)), 
                floor(map(0, WINDOW.y.min, WINDOW.y.max, height, 0)),
                floor(map(x, WINDOW.x.min, WINDOW.x.max, 0, width)), 
                floor(map(f(x), WINDOW.y.min, WINDOW.y.max, height, 0)),
                floor(map(x + deltaX, WINDOW.x.min, WINDOW.x.max, 0, width)), 
                floor(map(f(x + deltaX), WINDOW.y.min, WINDOW.y.max, height, 0)),
                floor(map(x + deltaX, WINDOW.x.min, WINDOW.x.max, 0, width)), 
                floor(map(0, WINDOW.y.min, WINDOW.y.max, height, 0))
            );
        }
    }
}

function calculateRiemannSum(a, b, deltaX, approximation) {
    
    var sum = 0;
    
    if (approximation == "left") {
        for (var x = a; x + e < b ; x += deltaX) {
            sum += (deltaX * f(x));
        }
    } else if (approximation == "right") {
        for (var x = a; x + e < b; x += deltaX) {
            sum += (deltaX * f(x + deltaX));
        }
    } else if (approximation == "midpoint") {
        for (var x = a; x + e < b; x += deltaX) {
            sum += (deltaX * f(x + (deltaX / 2)));
        }
    } else if (approximation == "trapezoid") {
        for (var x = a; x + e < b; x += deltaX) {
            sum += (deltaX * (f(x) + f(x + (deltaX))) / 2);
        }
    }
    
    return sum;
}

function setup() {

    createCanvas(600, 600);

    var a = -1;
    var b = 2;
    var n = 30;
    var deltaX = ((b - a) / n);
    var approximation = "midpoint"; // left, right, midpoint, trapezoid
    var riemannSumResult = calculateRiemannSum(a, b, deltaX, approximation);

    background(255);

    graph(0.1);
    displayRiemannSum(a, b, deltaX, approximation);

    console.log(riemannSumResult.toFixed(3));
}
