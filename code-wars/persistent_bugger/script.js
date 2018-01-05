function persistence(num) {

    num = num.toString();
    var t = 0;

    while (num.length > 1) {
        num = num.split('').reduce(function (a, b) { return a * b; }).toString();
        t++;
    }

    return t;
}

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(12));
