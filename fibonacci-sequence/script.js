function fibonacciSequence(t) {

    var sequence = [];

    var a = 0;
    var b = 0;
    var c = 1;

    while (sequence.length < t) {

        sequence.push(c);
        
        a = b;
        b = c;
        c = a + b;
    }

    return sequence;
}

console.log(fibonacciSequence(10));
