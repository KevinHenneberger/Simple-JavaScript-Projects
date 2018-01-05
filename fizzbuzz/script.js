function fizzBuzz(n) {

    if (n % 3 == 0 && n % 5 == 0) {
        return "FizzBuzz";
    } else if (n % 3 == 0) {
        return "Fizz";
    } else if (n % 5 == 0) {
        return "Buzz";
    } else {
        return n;
    }
}

for (var i = 1; i <= 100; i++) { 
    console.log(fizzBuzz(i));
}