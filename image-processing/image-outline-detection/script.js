var img;

function preload() {
    img = loadImage("cow.png");
}

function mean(d) {

    var sum = 0;

    for (var i = 0; i < d.length; i++) {
        sum += d[i];
    }

    var mean = sum /  d.length;

    return mean;
}

function standardDeviation(d) {

    var sumOftheDiffSquared = 0;

    for (var i = 0; i < d.length; i++) {
        sumOftheDiffSquared += sq(d[i] - mean(d));
    }

    var standardDeviation = Math.sqrt(sumOftheDiffSquared / (d.length));

    return standardDeviation;
}

function outlineDetection(sensitivity) {

    image(img, 0, 0, 251, 201);

    loadPixels();

    for (var i = 0; i < width * height * 4; i += 4) {
        
        var r = i;
        var g = i + 1;
        var b = i + 2;
        var a = i + 3;
        
        var c1 = [pixels[r], pixels[g], pixels[b]];
        var c2 = [pixels[r + 4], pixels[g + 4], pixels[b + 4]];
        var c3 = [pixels[r + (width * 4)], pixels[g + (width * 4)], pixels[b + (width * 4)]];
        
        if (standardDeviation([mean(c1), mean(c2)]) > sensitivity || standardDeviation([mean(c1), mean(c3)]) > sensitivity) {
            pixels[r] = 0;
            pixels[g] = 0;
            pixels[b] = 0;
        } else {
            pixels[r] = 255;
            pixels[g] = 255;
            pixels[b] = 255;
        }
    }
        
    updatePixels();
}

function setup() {
    background(255);
    createCanvas(251, 201);
    outlineDetection(0);
}
