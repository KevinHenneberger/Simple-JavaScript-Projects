var img;

function preload() {
    img = loadImage("beagle.jpg");
}

function addFilter(filterEffect) {

    image(img, 0, 0, 320, 254);

    loadPixels();

    for (var i = 0; i < width * height * 4; i += 4) {

        var r = i;
        var g = i + 1;
        var b = i + 2;
        var a = i + 3;

        switch (filterEffect) {
            case "invert":
                pixels[r] = 255 - pixels[r];
                pixels[g] = 255 - pixels[g];
                pixels[b] = 255 - pixels[b];
                break;

            case "grayscale":
                var grayscale = (pixels[r] + pixels[g] + pixels[b]) / 3;
                pixels[r] = grayscale;
                pixels[g] = grayscale;
                pixels[b] = grayscale;
                break;

            case "threshold":
                var threshold = 255;
                var mean = (pixels[r] + pixels[g] + pixels[b]) / 3;

                if (mean > 125) {
                    threshold = 0;
                }

                pixels[r] = threshold;
                pixels[g] = threshold;
                pixels[b] = threshold;
                break;

            case "red":
                pixels[g] = 0;
                pixels[b] = 0;
                break;

            case "green":
                pixels[r] = 0;
                pixels[b] = 0;
                break;

            case "blue":
                pixels[r] = 0;
                pixels[g] = 0;
                break;
        }
    }

    updatePixels();
}


function setup() {
    background(255);
    createCanvas(320, 254);
    addFilter("grayscale"); // invert, grayscale, threshold, red, green and blue
}
