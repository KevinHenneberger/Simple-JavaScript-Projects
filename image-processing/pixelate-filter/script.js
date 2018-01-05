var img;

function preload() {
    img = loadImage("beagle.jpg");
}

function pixelate(bitSize) {

    image(img, 0, 0, 320, 254);

    noStroke();
    
    for (var x = 0; x < 320; x += bitSize) {
        for (var y = 0; y < 254; y += bitSize) {
            var c = get(x, y);
            fill(c);
            rect(x, y, bitSize, bitSize);
        }
    }
}

function setup() {
    background(255);
    createCanvas(320, 254);
    pixelate(12);
}
