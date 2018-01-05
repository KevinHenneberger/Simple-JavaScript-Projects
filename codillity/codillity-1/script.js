function solution(N) {
    
    N = N.toString(2);
    
    var maxBinaryGap = 0;
    var binaryGap = 0;
    
    for (var i = 0; i < N.length; i++) {
        if (N[i] == '0') {
            binaryGap++;
        } else {
            
            if (binaryGap > maxBinaryGap) {
                maxBinaryGap = binaryGap;
            }
            
            binaryGap = 0;
        }
    }
    
    return maxBinaryGap;
}

var n = 1041;
console.log(solution(n));
