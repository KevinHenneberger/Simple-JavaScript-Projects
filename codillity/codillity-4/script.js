function solution(A) {
    
    var p = 0;
    var ps = [];

    while (true) {
        
        var sum1 = 0;
        var sum2 = 0;
        
        for (var i = 0; i < p; i++) {
            sum1 += A[i];
        }
        
        for (var i = p + 1; i < A.length; i++) {
            sum2 += A[i];
        }
        
        if (sum1 == sum2) {
            ps.push(p);
        }

        if (p >= A.length - 1) {
            if (ps.length > 0) {
                return ps;
            } else {
                return -1;
            }
        }

        p++;
    }
}

var a = [-1, 3, -4, 5, 1, -6, 2, 1];

console.log(solution(a));
