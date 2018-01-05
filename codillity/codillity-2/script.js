function solution(A) {

    A = A.sort();
    
    for (var i = 0; i < A.length - 1; i++) {
        if (A[i] == A[i + 1]) {
            i++;
        } else {
            return A[i];
        }
    }
}

var a = [9, 3, 9, 3, 9, 7, 9];
console.log(solution(a));
