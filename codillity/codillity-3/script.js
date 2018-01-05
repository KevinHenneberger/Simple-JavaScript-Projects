function solution(A, K) {
    
    var rotatedArray = []
    
    for (var i = 0; i < A.length; i++) {
        rotatedArray[(i + k) % A.length] = A[i];
    }
    
    return rotatedArray;
}

var a = [3, 8, 9, 7, 6];
var k = 1;
console.log(solution(a, k));
