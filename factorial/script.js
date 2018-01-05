function factorial(n) {

    if (n < 0) {
        return -1;
    } else if (n == 0) {
        return 1;
    } else {
        var f = n;

        for (var i = n - 1; i >= 1; i--) {
            f *= i;
        }

        return f;
    }
}

console.log(factorial(5));
